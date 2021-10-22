import { NgModule } from '@angular/core';
import { CityComponent } from './city.component';
import { CityRoutingModule } from './city-routing/city-routing.module';
import { CityService } from './city.service';


@NgModule({
  imports: [
    CityRoutingModule
  ],
  declarations: [ CityComponent ],
  providers: [
    CityService
  ]
})
export class CityModule { }
