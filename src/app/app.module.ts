import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { PrototypeWrapperComponent } from './components/prototype-wrapper/prototype-wrapper.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { ColorsComponent } from './pages/styleguide/colors/colors.component';
import { IconsComponent } from './pages/styleguide/icons/icons.component';
import { TypographyComponent } from './pages/styleguide/typography/typography.component';
import { ButtonSkinsComponent } from './pages/styleguide/button-skins/button-skins.component';
import { ComponentPageIntroComponent } from './components/component-page-intro/component-page-intro.component';
import { StyleguideSampleComponent } from './components/styleguide-sample/styleguide-sample.component';
import { IconComponent } from './components/icon/icon.component';

import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

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
    ButtonSkinsComponent,
    ComponentPageIntroComponent,
    StyleguideSampleComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule.forRoot({ baseUrl: '../../assets/icons/' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
