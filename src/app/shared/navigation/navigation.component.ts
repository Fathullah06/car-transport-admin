import { Component, OnInit } from '@angular/core';

interface Navigation {
  route: string,
  name: string,
  icon: string
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  public navigationList: Navigation[] = []
  constructor() { }

  ngOnInit() {
    this.navigationList = [
      {
        route: '/city',
        name: 'City',
        icon: 'fa fa-home'
      },
      {
        route: '/price',
        name: 'Price',
        icon: 'fa fa-dollar'
      }
    ]
  }

}
