import { Component, OnInit } from '@angular/core';
import { typographyStyles } from './typography';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  styles = typographyStyles;
  constructor() { }

  ngOnInit(): void {
  }

}
