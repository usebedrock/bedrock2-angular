import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'br-prototype-wrapper',
  templateUrl: './prototype-wrapper.component.html',
})
export class PrototypeWrapperComponent implements OnInit {
  isVisible: boolean = true;

  @HostListener("window:keydown.control.m", ['$event'])
  @HostListener("window:keydown.control.b", ['$event'])

  onKeyDown(event:KeyboardEvent) {

    this.isVisible=!this.isVisible
  }

  constructor() { }

  ngOnInit(): void {

  }

}
