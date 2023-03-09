import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DesignCommunComponent} from "./layout/design-commun/design-commun.component";


const routes: Routes = [

    {
      path: 'backoffice',
      component: DesignCommunComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule)
        }
      ]
    }

  ]
;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
