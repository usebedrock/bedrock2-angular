import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-styleguide-sample',
  templateUrl: './styleguide-sample.component.html',
  styleUrls: ['./styleguide-sample.component.scss']
})
export class StyleguideSampleComponent implements OnInit {
  @Input() title?: string = 'default';
  constructor() { }

  ngOnInit(): void {
  }

}
