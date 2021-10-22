import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Price } from './price.model';
import { Response } from 'app/shared/models/response.models';
import { PriceService } from './price.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddPriceComponent } from './components/add-price/add-price.component';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceComponent implements OnInit {
  public prices: Price[] = [];
  public reorderable = true;
  public columns = [];
  // Data table 
  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;

  // ngx-bootstrap
  private bsModalRef?: BsModalRef;

  constructor(
    private priceService: PriceService,
    private cdRef: ChangeDetectorRef,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.setColumns();
    this.fetchPriceList();
  }

  public onSelect({ selected }): void {
    console.log('Select Event', selected);
    const state = {
      isEditMode: true,
      selectedPrice: selected[0]
    }
    this.bsModalRef = this.modalService.show(AddPriceComponent, { initialState: state });
  }


  private setColumns(): void {
    this.columns = [
      { name: 'Origin', prop: 'origin.name' },
      { name: 'Destination', prop: 'destination.name' },
      { prop: 'empty' },
      { prop: 'goods' }
    ];
  }

  private fetchPriceList(): void {
    this.priceService.getList().pipe(
      take(1)
    ).subscribe((res: Response) => {
      this.prices = res.status === 200 ? res.payload : [];
      this.cdRef.markForCheck();
    });
  }

}
