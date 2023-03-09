import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignCommunComponent } from './design-commun/design-commun.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DesignCommunComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    DesignCommunComponent

  ]
})
export class LayoutModule { }
