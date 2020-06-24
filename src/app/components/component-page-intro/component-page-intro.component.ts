import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-component-page-intro',
  templateUrl: './component-page-intro.component.html',
})
export class ComponentPageIntroComponent implements OnInit {
  @Input() title?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
