import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { City } from './city.model';
import { CityService } from './city.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

}
