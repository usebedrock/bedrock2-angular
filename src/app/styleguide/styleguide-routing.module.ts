import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleguideComponent} from './styleguide.component';
import { ColorsComponent} from './colors/colors.component';
import { TypographyComponent} from './typography/typography.component';
import { IconsComponent} from './icons/icons.component';
import { ButtonSkinsComponent} from './button-skins/button-skins.component';


const routes: Routes = [
  {
    path: 'styleguide', component: StyleguideComponent,
    children: [
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'button-skins', component: ButtonSkinsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleguideRoutingModule { }
