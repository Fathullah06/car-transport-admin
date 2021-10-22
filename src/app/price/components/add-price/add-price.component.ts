import { Component, OnInit } from '@angular/core';
import { Price } from 'app/price/price.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.scss']
})
export class AddPriceComponent implements OnInit {

  isEditMode?: boolean;
  selectedPrice?: Price
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    console.log(this.isEditMode)

  }

}
