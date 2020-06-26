import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent, ModuleOneComponent, ModuleTwoComponent, ModuleThreeComponent, IndexComponent,  AddComponent } from './pages/dashboard';
import { StyleguideComponent, ColorsComponent, TypographyComponent, IconsComponent, ButtonSkinsComponent, ButtonTypesComponent, IntroComponent } from './pages/styleguide';
import { AlertComponent as AlertStyleguideComponent } from './pages/styleguide/alert/alert.component';
import { PanelComponent as PanelStyleguideComponent } from './pages/styleguide/panel/panel.component';


const routes: Routes = [
  { path: 'sign-in', data: { title: 'Sign in'}, component: SignInComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'dashboard', data: { title: 'Dashboard'}, component: DashboardComponent,
    children: [
      { path: 'module-1', data: { title: 'Module 1'}, component: ModuleOneComponent, children: [
          { path: 'index', data: { title: 'Overview'}, component: IndexComponent },
          { path: 'add', data: { title: 'Add'}, component: AddComponent },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ]},
      { path: 'module-2', data: { title: 'Module 2'}, component: ModuleTwoComponent },
      { path: 'module-3', data: { title: 'Module 3'}, component: ModuleThreeComponent },
      { path: '', redirectTo: 'module-1', pathMatch: 'full' },
    ]
  },
  {
    path: 'styleguide', data: { title: 'Styleguide' }, component: StyleguideComponent,
    children: [
      { path: 'intro', data: { title: 'Intro' }, component: IntroComponent },
      { path: 'colors', data: { title: 'Colors' }, component: ColorsComponent },
      { path: 'typography', data: { title: 'Typography' }, component: TypographyComponent },
      { path: 'icons', data: { title: 'Icons' }, component: IconsComponent },
      { path: 'button-skins', data: { title: 'Button skins' }, component: ButtonSkinsComponent },
      { path: 'button-types', data: { title: 'Button types' }, component: ButtonTypesComponent },
      { path: 'alerts', data: { title: 'Alert' }, component: AlertStyleguideComponent },
      { path: 'panels', data: { title: 'Panel' }, component: PanelStyleguideComponent },
      { path: '', redirectTo: 'intro', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
