import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { PrototypeWrapperComponent } from './components/prototype-wrapper/prototype-wrapper.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { ColorsComponent } from './styleguide/colors/colors.component';
import { IconsComponent } from './styleguide/icons/icons.component';
import { TypographyComponent } from './styleguide/typography/typography.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PrototypeWrapperComponent,
    SignInComponent,
    DashboardComponent,
    StyleguideComponent,
    ColorsComponent,
    IconsComponent,
    TypographyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
