import {Component, Input, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';

interface Page {
  name: string;
  path: string;
  isCategory: boolean;
  children?: Page[];
}

@Component({
  selector: 'app-page-tree',
  templateUrl: './page-tree.component.html',
  styleUrls: ['./page-tree.component.scss']
})
export class PageTreeComponent implements OnInit {
  @Input() public routes: Route[] = [];
  public pages: Page[] = [];

  public ngOnInit() {
    this.pages = this.routes.map(route => {
      return this.mapRouteToPage(route, '');
    });
  }

  private mapRouteToPage(route: Route, parentPath: string): Page {
    let children: Page[] = [];
    const path = `${parentPath}/${route.path}`;
    if (route.children && route.children.length > 0) {
      children = route.children
        .map(childRoute => this.mapRouteToPage(childRoute, path));
    }
    const name = route.data ? route.data.title : route.path;
    const isCategory = route.data ? route.data.isCategory : false;
    return {
      name,
      path,
      isCategory,
      children
    };
  }
}
