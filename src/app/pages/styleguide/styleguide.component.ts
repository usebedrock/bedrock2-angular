import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
})
export class StyleguideComponent implements OnInit {
  public routes: Route[] = [];

  constructor(private readonly router: Router) {
    this.routes = this.router.config.filter(route => {
      return ['styleguide'].includes(route.path);
    });
  }

  ngOnInit(): void {
  }

}
