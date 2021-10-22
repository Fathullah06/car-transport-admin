import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Suburb } from './suburb.model';
import { SuburbService } from './suburb.service';
@Component({
  selector: 'app-suburb',
  templateUrl: './suburb.component.html',
  styleUrls: ['./suburb.component.scss']
})
export class SuburbComponent implements OnInit {

  constructor(private suburbService: SuburbService) { }

  ngOnInit() {
  }

}
