import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeComponent} from "./liste/liste.component";

const routes: Routes = [
  {path:'liste',component:ListeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendrierRoutingModule { }
