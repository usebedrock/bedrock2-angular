import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-toolbar-item',
  templateUrl: './item.component.html',
  host: {'class': 'c-toolbar__item'}
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
