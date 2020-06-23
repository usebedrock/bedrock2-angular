import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent, ModuleOneComponent, ModuleTwoComponent, ModuleThreeComponent } from './pages/dashboard';
import { StyleguideComponent, ColorsComponent, TypographyComponent, IconsComponent} from './styleguide/index';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'styleguide', component: StyleguideComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'module-1', component: ModuleOneComponent },
      { path: 'module-2', component: ModuleTwoComponent },
      { path: 'module-3', component: ModuleThreeComponent },
    ]
  },
  {
    path: 'styleguide', component: StyleguideComponent,
    children: [
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'icons', component: IconsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


