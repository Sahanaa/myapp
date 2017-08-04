import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from './app.component';
import { AppComponentComponent } from './app-component/app-component.component';

@NgModule({
  declarations: [
    AppComponentComponent,
    AutocompleteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponentComponent]
})

export class AppModule { }
