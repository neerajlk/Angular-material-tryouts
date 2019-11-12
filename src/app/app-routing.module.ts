import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatautoCompleteComponent } from './matauto-complete/matauto-complete.component'

const routes: Routes = [
  { path: '', component: MatautoCompleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
