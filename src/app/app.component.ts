import { Component, ElementRef, Input } from '@angular/core';

//data is passed to AutocompleteComponent

@Component({
    selector: 'autocomplete',
    host: {
    '(document.click)': '(handleClick($event))',
    },
    styles: [`
            .selected{
            border:solid #41a62a 1px;
            float:left; 
            margin:2px;
            padding:2px 15px;
}
 
.selected a{
          cursor:pointer;
          font-weight:bold;
}
`],
    template: `
             <div class="container" >
             <div class="input-field col s5">
             <input id="country" type="text" class="validate filter-input" [(ngModel)]=query (keyup)=filter()>
             <label for="country">Country</label>
             </div>

             <div class="suggestions" *ngIf="filteredList.length > 0">
             <ul *ngFor="let item of filteredList" >

             <li>
             <a (click)="select(item)"> {{item}}</a>
             </li>
             </ul>
             </div>

             <div *ngFor="let item of selected">
            <div class="selected" >
            <span>{{item}}</span>
            <a (click)="remove(item)">x</a>
            </div>
            </div>
             </div>
             `
})

export class AutocompleteComponent {
     @Input() data;
   
    public query = '';
    public filteredList = [];
    public elementRef;
    public selected = [];
    public countries =[]; //created countries array
 
    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
    }

    filter() {
    if (this.query !== ""){
        this.filteredList = this.countries.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}
select(item){
    this.selected.push(item);
    this.query = '';
    this.filteredList = [];
}

remove(item){
    this.selected.splice(this.selected.indexOf(item),1);
}

handleClick(event){
   var clickedComponent = event.target;
   var inside = false;
   do {
       if (clickedComponent === this.elementRef.nativeElement) {
           inside = true;
       }
      clickedComponent = clickedComponent.parentNode;
   } while (clickedComponent);
    if(!inside){
        this.filteredList = [];
    }
}

}
