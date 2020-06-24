import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() skin?: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
