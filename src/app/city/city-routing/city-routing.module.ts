import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CityComponent } from '../city.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CityComponent,
    data: {
      title: 'City Component'
    }
  }
];
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class CityRoutingModule { }
