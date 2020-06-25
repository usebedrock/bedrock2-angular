import { Component, OnInit } from '@angular/core';
import { colors } from './colors';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
})
export class ColorsComponent implements OnInit {
  colors = colors;
  constructor() { }

  ngOnInit(): void {
  }

}
