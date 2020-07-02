import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
})
export class StyleguideComponent {
  public routes: Route[] = [];

  constructor(private readonly router: Router) {
    const styleguideRoutes = this.router.config
      .filter(route => {
        return ['styleguide'].includes(route.path);
      })[0];
    this.routes = styleguideRoutes.children
      .filter(route => !['intro'].includes(route.path));
  }

}
