import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlankTemplateComponent} from './template/blank-template.component';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'city',
  pathMatch: 'full'
}, {
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Car-Transport'
  },
  children: [
    {
      path: 'city',
      loadChildren: () => import('./city/city.module').then(m => m.CityModule),
      data: {
        title: 'City'
      },
    },
    {
      path: 'suburb',
      loadChildren: () => import('./suburb/suburb.module').then(m => m.SuburbModule),
      data: {
        title: 'Suburb'
      },
    },
    {
      path: 'car',
      loadChildren: () => import('./car/car.module').then(m => m.CarModule),
      data: {
        title: 'Car'
      },
    },
    {
      path: 'price',
      loadChildren: () => import('./price/price.module').then(m => m.PriceModule),
      data: {
        title: 'Price'
      },
    },
    {
      path: 'ui-elements',
      loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule),
      data: {
        title: 'UI Elements'
      },
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      data: {
        title: 'Form Page'
      },
    }
  ]
}, {
  path: 'tables',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Tables'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    }
  ]
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
