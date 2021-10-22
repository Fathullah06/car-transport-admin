import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Car } from './car.model';
import { CarService } from './car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

}
