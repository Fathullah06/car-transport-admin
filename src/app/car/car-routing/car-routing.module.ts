import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CarComponent } from '../car.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CarComponent,
    data: {
      title: 'Car Component'
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
export class CarRoutingModule { }
