import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-panel-body',
  templateUrl: './body.component.html',
  host: {'class': 'c-panel__body'}
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
