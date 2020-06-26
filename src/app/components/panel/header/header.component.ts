import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-panel-header',
  templateUrl: './header.component.html',
  host: {'class': 'c-panel__header'}
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
