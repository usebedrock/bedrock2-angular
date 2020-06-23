import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-component-page-intro',
  templateUrl: './component-page-intro.component.html',
  styleUrls: ['./component-page-intro.component.scss']
})
export class ComponentPageIntroComponent implements OnInit {
  @Input() title?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
