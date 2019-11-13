import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormControlsComponent } from './form-controls/form-controls.component'
import { LayoutsComponent } from './layouts/layouts.component'
import { ButtonsIndicatorsComponent } from './buttons-indicators/buttons-indicators.component'

const routes: Routes = [
  { path: 'form-controls', component: FormControlsComponent },
  { path: 'layouts', component: LayoutsComponent },
  { path: 'buttons-and-indicators', component: ButtonsIndicatorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
