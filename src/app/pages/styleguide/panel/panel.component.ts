import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './panel.component.html',
  host: {'class': 'c-panel__header'}
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
