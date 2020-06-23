import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent, ModuleOneComponent, ModuleTwoComponent, ModuleThreeComponent } from './pages/dashboard';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'module-1', component: ModuleOneComponent },
      { path: 'module-2', component: ModuleTwoComponent },
      { path: 'module-3', component: ModuleThreeComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


