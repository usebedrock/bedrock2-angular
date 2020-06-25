import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

interface Page {
  name: string;
  path: string;
  children?: Page[];
}

@Component({
  selector: 'app-page-tree',
  templateUrl: './page-tree.component.html',
  styleUrls: ['./page-tree.component.scss']
})
export class PageTreeComponent {
  public pages: Page[] = [];

  public constructor(private readonly router: Router) {
    this.pages = this.router.config
      .filter(filterRoutes)
      .map(route => mapRouteToPage(route, ''));
  }
}

function mapRouteToPage(route: Route, parentPath: string): Page {
  let children: Page[] = [];
  const path = `${parentPath}/${route.path}`;
  if (route.children && route.children.length > 0) {
    children = route.children
      .filter(filterRoutes)
      .map(childRoute => mapRouteToPage(childRoute, path));
  }
  const name = route.data ? route.data.title : route.path;
  return {
    name,
    path,
    children
  };
}

function filterRoutes(route: Route): boolean {
  return !['styleguide', ''].includes(route.path);
}
