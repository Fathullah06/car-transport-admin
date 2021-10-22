import { NgModule } from '@angular/core';
import { CarComponent } from './car.component';
import { CarRoutingModule } from './car-routing/car-routing.module';
import { CarService } from './car.service';


@NgModule({
  imports: [
    CarRoutingModule
  ],
  declarations: [ CarComponent ],
  providers: [
    CarService
  ]
})
export class CarModule { }
