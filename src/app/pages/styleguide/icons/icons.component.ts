import { Component, OnInit } from '@angular/core';
import { icons } from './icons';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
})
export class IconsComponent implements OnInit {
  icons = icons;
  constructor() { }

  ngOnInit(): void {
  }

}
