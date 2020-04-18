import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SectionComponent } from './wrapper/section/section.component';
import { FieldHeaderComponent } from './wrapper/section/field-header/field-header.component';
import { FieldComponent } from './wrapper/section/field/field.component';
import { HandlerComponent } from './handler/handler.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    SectionComponent,
    FieldHeaderComponent,
    FieldComponent,
    HandlerComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
