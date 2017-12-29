/* Core modules */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Third party modules */

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Root Component */

import { AppComponent } from './app.component';

/* Child Components */

import { VisitorFormComponent } from './components/visitor-form/visitor-form.component';
import { VisitorListComponent } from './components/visitor-list/visitor-list.component';
import { VisitorGreetingComponent } from './components/visitor-greeting/visitor-greeting.component';

/* Services */

import { CountryService } from './services/country.service';
import { VisitorService } from './services/visitor.service';

/* Pipes */

import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VisitorFormComponent,
    VisitorListComponent,
    VisitorGreetingComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ CountryService, VisitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
