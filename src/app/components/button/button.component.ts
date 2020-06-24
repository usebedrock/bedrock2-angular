import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() skin?: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
