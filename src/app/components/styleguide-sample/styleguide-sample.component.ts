import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-styleguide-sample',
  templateUrl: './styleguide-sample.component.html',
})
export class StyleguideSampleComponent implements OnInit {
  @Input() title?: string = 'default';
  @Input() code?: string;
  isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
