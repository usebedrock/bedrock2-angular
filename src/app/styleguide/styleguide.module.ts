import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleguideRoutingModule } from './styleguide-routing.module';
import { StyleguideComponent } from './styleguide.component';
import { ColorsComponent } from './colors/colors.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonSkinsComponent } from './button-skins/button-skins.component';


@NgModule({
  declarations: [
    StyleguideComponent,
    ColorsComponent,
    IconsComponent,
    TypographyComponent,
    ButtonSkinsComponent,
  ],
  imports: [
    CommonModule,
    StyleguideRoutingModule
  ]
})
export class StyleguideModule { }
