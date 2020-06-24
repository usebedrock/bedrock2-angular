import { Component, OnInit, Input, Directive } from '@angular/core';

@Component({
  selector: 'br-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {
  @Input() name?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
