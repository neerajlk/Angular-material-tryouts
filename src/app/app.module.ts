import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatAutocompleteModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatGridListModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRippleModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ButtonsIndicatorsComponent } from './buttons-indicators/buttons-indicators.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlsComponent,
    LayoutsComponent,
    ButtonsIndicatorsComponent,
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
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
