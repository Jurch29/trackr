import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ParametresComponent } from './parametres/parametres.component';
import { RaclagesComponent } from './raclages/raclages.component';
import { HistoriquesComponent } from './historiques/historiques.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { CompteComponent } from './parametres/sous-pages-parametres/compte/compte.component';
import { AlerteComponent } from './parametres/sous-pages-parametres/alerte/alerte.component';
import { ElevageComponent } from './parametres/sous-pages-parametres/elevage/elevage.component';
import { RobotsComponent } from './parametres/sous-pages-parametres/robots/robots.component';
import { MentionsLComponent } from './about/sous-pages-about/mentions-l/mentions-l.component';
import { ConfidentialiteComponent } from './about/sous-pages-about/confidentialite/confidentialite.component';

import { RobotService } from '../service/robot.service';

export 
{
  HomeComponent,
  ParametresComponent,
  RaclagesComponent,
  HistoriquesComponent,
  HelpComponent,
  AboutComponent,
  CompteComponent,
  AlerteComponent,
  ElevageComponent,
  RobotsComponent,
  MentionsLComponent,
  ConfidentialiteComponent
} ;

import { ComponentModule } from '../component/component.module';

@NgModule({
    imports: [
      CommonModule,
      ComponentModule,
    ],
    providers: [
      RobotService
    ],
    declarations: [CompteComponent, AlerteComponent, ElevageComponent, RobotsComponent, MentionsLComponent, ConfidentialiteComponent]
})
export class ViewModule { }
