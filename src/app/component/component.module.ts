import '../../polyfills';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ChartsModule } from 'ng2-charts'
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TreeModule } from 'angular-tree-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {inject, InjectionToken, LOCALE_ID} from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {BrowserModule} from '@angular/platform-browser';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import 
{
  MatToolbar,
  MatBadgeModule,
  MatFormFieldModule,
  MAT_DATE_LOCALE,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

import {TopBarComponent} from './topbar/topbar.component';
import {SideBarLeftComponent} from './sidebarleft/sidebarleft.component';
import {SideBarRightComponent} from './sidebarright/sidebarright.component';
import {RobotdetailcardComponent} from './robotdetailcard/robotdetailcard.component';
import {AlerteItemComponent} from './alerte-item/alerte-item.component';
import { RaclagestatComponent } from './raclagestat/raclagestat.component';
import { RaclagetimelineComponent } from './raclagetimeline/raclagetimeline.component';
import { PopuprobotComponent } from './popuprobot/popuprobot.component';
import { PopupalerteComponent } from './popupalerte/popupalerte.component';
import { CarteelevageComponent } from './carteelevage/carteelevage.component';
import { AddraclageComponent } from './addraclage/addraclage.component';
import { EditraclageComponent } from './editraclage/editraclage.component';
import { EditrobotComponent } from './editrobot/editrobot.component';
import { EditElevageStructureComponent } from './edit-elevage-structure/edit-elevage-structure.component';

import {RobotService} from '../service/robot.service';

@NgModule({
  declarations: [
    TopBarComponent,
    SideBarRightComponent,
    SideBarLeftComponent,
    RobotdetailcardComponent,
    AlerteItemComponent,
    RaclagestatComponent,
    RaclagetimelineComponent,
    PopuprobotComponent,
    PopupalerteComponent,
    CarteelevageComponent,
    AddraclageComponent,
    EditraclageComponent,
    EditrobotComponent,
    EditElevageStructureComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ChartsModule,
    VerticalTimelineModule,
    FormsModule,
    MatTreeModule,
    TreeModule,
    MatBadgeModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatGridListModule,
    MatRadioModule,
    HttpClientModule,
    MatExpansionModule
  ],
  exports: [
    TopBarComponent,
    SideBarRightComponent,
    SideBarLeftComponent,
    RobotdetailcardComponent,
    MatCardModule,
    AlerteItemComponent,
    RaclagestatComponent,
    RaclagetimelineComponent,
    PopuprobotComponent,
    PopupalerteComponent,
    CarteelevageComponent,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    AddraclageComponent,
    MatCheckboxModule,
    MatSnackBarModule,
    MatGridListModule,
    MatRadioModule,
    MatSidenavModule,
    FormsModule,
    MatTreeModule,
    MatToolbar,
    HttpClientModule,
    MatExpansionModule,
    EditraclageComponent,
    EditrobotComponent,
    EditElevageStructureComponent
  ],
  providers: [
    RobotService,
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
    AngularFireModule,
    AngularFirestoreModule
  ],
  entryComponents: [AddraclageComponent,
    EditraclageComponent,
    EditrobotComponent,
    EditElevageStructureComponent]
})
export class ComponentModule {
}
