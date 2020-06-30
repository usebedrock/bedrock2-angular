import { Component, OnInit, HostListener} from '@angular/core';
import {Route, Router} from '@angular/router';
import {config} from 'rxjs';

@Component({
  selector: 'br-prototype-wrapper',
  templateUrl: './prototype-wrapper.component.html',
})
export class PrototypeWrapperComponent implements OnInit {
  isVisible: boolean = true;

  @HostListener("window:keydown.control.m", ['$event'])
  @HostListener("window:keydown.control.b", ['$event'])

  public routes: Route[];

  onKeyDown(event:KeyboardEvent) {

    this.isVisible=!this.isVisible;
  }

  constructor(private readonly router: Router) {
    this.routes = this.router.config.filter(route => {
      return !['styleguide', ''].includes(route.path);
    });
  }

  ngOnInit(): void {

  }

}
