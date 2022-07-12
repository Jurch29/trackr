import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { ComponentModule } from '../component/component.module';
import { AlertModule } from 'ngx-bootstrap';

import 
{
  ViewModule,
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
} from '../view/view.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes =
[
  { path: 'home', component: HomeComponent },
  { path: 'raclages', component: RaclagesComponent },
  { path: 'historiques', component: HistoriquesComponent },
  { path: 'about', component: AboutComponent,
    children: [ { path: '', redirectTo: 'mentions-l', pathMatch: 'full' },
                { path: 'mentions-l', component: MentionsLComponent },
                { path: 'confidentialite', component: ConfidentialiteComponent } 
              ]},
  { path: 'help', component: HelpComponent },
  { path: 'parametres', component: ParametresComponent,
    children: [ { path: '', redirectTo: 'compte', pathMatch: 'full' },
                { path: 'compte', component: CompteComponent },
                { path: 'alerte', component: AlerteComponent },
                { path: 'elevage', component: ElevageComponent },
                { path: 'robots', component: RobotsComponent } 
              ]},
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

export class MyHammerConfig extends HammerGestureConfig  
{
  overrides = <any>
  {
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParametresComponent,
    RaclagesComponent,
    HistoriquesComponent,
    HelpComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    ViewModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [AngularFireModule,
    AngularFirestoreModule,{ 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: MyHammerConfig,
  }] 
})
export class AppModule { }
