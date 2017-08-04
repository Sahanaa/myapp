import { Component } from '@angular/core';
import { AutocompleteComponent } from '../app.component';

@Component({
  selector: 'app-app-component',
  template: `
    <p>
      <autocomplete [data]=countries ></autocomplete>
    </p>
  `
})
export class AppComponentComponent {
  public countries = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus","Belgium","Bosnia & Herzegovina",
                        "Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Georgia",
                        "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein",
                        "Lithuania","Luxembourg","Macedonia","Malta","Moldova","Monaco","Montenegro","Netherlands",
                        "Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia",
                        "Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];

}
