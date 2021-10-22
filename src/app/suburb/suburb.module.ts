import { NgModule } from '@angular/core';
import { SuburbComponent } from './suburb.component';
import { SuburbRoutingModule } from './suburb-routing/suburb-routing.module';
import { SuburbService } from './suburb.service';


@NgModule({
  imports: [
    SuburbRoutingModule
  ],
  declarations: [ SuburbComponent ],
  providers: [
    SuburbService
  ]
})
export class SuburbModule { }
