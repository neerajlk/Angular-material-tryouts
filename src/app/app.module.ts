import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatIconModule, MatRadioModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatautoCompleteComponent } from './matauto-complete/matauto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    MatautoCompleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
