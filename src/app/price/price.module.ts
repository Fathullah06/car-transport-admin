import { NgModule } from '@angular/core';
import { PriceComponent } from './price.component';
import { PriceRoutingModule } from './price-routing/price-routing.module';
import { PriceService } from './price.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap';
import { AddPriceComponent } from './components/add-price/add-price.component';


@NgModule({
  imports: [
    NgxDatatableModule,
    PriceRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [ PriceComponent, AddPriceComponent ],
  providers: [
    PriceService
  ]
})
export class PriceModule { }
