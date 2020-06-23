import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-prototype-wrapper',
  templateUrl: './prototype-wrapper.component.html',
  styleUrls: ['./prototype-wrapper.component.scss']
})
export class PrototypeWrapperComponent implements OnInit {
  isVisible: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
