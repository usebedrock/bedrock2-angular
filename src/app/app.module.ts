import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent, ModuleOneComponent, ModuleTwoComponent, ModuleThreeComponent, AddComponent } from './pages/dashboard/index';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { ColorsComponent } from './pages/styleguide/colors/colors.component';
import { IconsComponent } from './pages/styleguide/icons/icons.component';
import { TypographyComponent } from './pages/styleguide/typography/typography.component';
import { ButtonSkinsComponent } from './pages/styleguide/button-skins/button-skins.component';
import { AlertComponent as AlertStyleguideComponent } from './pages/styleguide/alert/alert.component';
import { PanelComponent as PanelStyleguideComponent } from './pages/styleguide/panel/panel.component';
import { IntroComponent } from './pages/styleguide/intro/intro.component';

import { ButtonComponent } from './components/button/button.component';
import { PrototypeWrapperComponent } from './components/prototype-wrapper/prototype-wrapper.component';
import { ComponentPageIntroComponent } from './components/component-page-intro/component-page-intro.component';
import { StyleguideSampleComponent } from './components/styleguide-sample/styleguide-sample.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { AlertComponent } from './components/alert/alert.component';
import { PageTreeComponent } from './page-tree/page-tree.component';
import { ButtonTypesComponent } from './pages/styleguide/button-types/button-types.component';
import { PanelComponent } from './components/panel/panel.component';
import { BodyComponent } from './components/panel/body/body.component';
import { HeaderComponent } from './components/panel/header/header.component';
import { IndexComponent } from './pages/dashboard/module-one/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PrototypeWrapperComponent,
    SignInComponent,
    DashboardComponent,
    ModuleOneComponent,
    ModuleTwoComponent,
    ModuleThreeComponent,
    StyleguideComponent,
    ColorsComponent,
    IconsComponent,
    TypographyComponent,
    ButtonSkinsComponent,
    ComponentPageIntroComponent,
    StyleguideSampleComponent,
    IconComponent,
    InputComponent,
    AlertComponent,
    AlertStyleguideComponent,
    AddComponent,
    PageTreeComponent,
    IntroComponent,
    ButtonTypesComponent,
    PanelComponent,
    PanelStyleguideComponent,
    BodyComponent,
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule.forRoot({ baseUrl: '../../assets/icons/' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

