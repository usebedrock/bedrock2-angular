import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { PrototypeWrapperComponent } from './components/prototype-wrapper/prototype-wrapper.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ModuleOneComponent } from './pages/dashboard/module-one/module-one.component';
import { ModuleTwoComponent } from './pages/dashboard/module-two/module-two.component';
import { ModuleThreeComponent } from './pages/dashboard/module-three/module-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PrototypeWrapperComponent,
    SignInComponent,
    DashboardComponent,
    ModuleOneComponent,
    ModuleTwoComponent,
    ModuleThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
