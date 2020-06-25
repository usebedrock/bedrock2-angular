import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent, ModuleOneComponent, ModuleTwoComponent, ModuleThreeComponent, AddComponent } from './pages/dashboard';
import { StyleguideComponent, ColorsComponent, TypographyComponent, IconsComponent, ButtonSkinsComponent, IntroComponent } from './pages/styleguide';
import { AlertComponent as AlertStyleguideComponent } from './pages/styleguide/alert/alert.component';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'module-1', component: ModuleOneComponent},
      { path: 'module-2', component: ModuleTwoComponent },
      { path: 'module-3', component: ModuleThreeComponent },
      { path: 'module-1/add', component: AddComponent },
      { path: '', redirectTo: 'module-1', pathMatch: 'full' },
    ]
  },
  {
    path: 'styleguide', component: StyleguideComponent,
    children: [
      { path: 'intro', component: IntroComponent },
      { path: '', redirectTo: 'intro', pathMatch: 'full' },
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'button-skins', component: ButtonSkinsComponent },
      { path: 'alerts', component: AlertStyleguideComponent },
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
