import { Component, OnInit, Input } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'br-styleguide-sample',
  templateUrl: './styleguide-sample.component.html',
})
export class StyleguideSampleComponent {
  @Input() title?: string = 'default';
  @Input() code?: string;
  isVisible: boolean = false;

  public get highlightedCode(): string {
    return Prism.highlight(this.code, Prism.languages.html, 'html');
  }

  constructor() { }
}
