import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { AlerteService } from '../../service/alerte.service';
import * as ScreenFull from 'screenfull';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopBarComponent implements OnInit
{
  leftIsOpen:boolean;
  rightisOpen:boolean;
  notif: number;

  events: string[] = [];
  opened: boolean;

  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  listAlertes = [];

  @Output() changeleftside: EventEmitter<boolean> = new EventEmitter();
  @Output() changerightside: EventEmitter<boolean> = new EventEmitter();

  constructor(private dataPU: AlerteService)
  {
  }

  ngOnInit()
  {
    this.leftIsOpen = false;
    this.notif = 4;
    this.listAlertes = this.dataPU.getlistealert();
  }

  switchsidenl()
  {
    if (window.innerWidth>1720)
      this.leftIsOpen = !this.leftIsOpen;

    this.changeleftside.emit(this.leftIsOpen);
  }

  switchsidenr()
  {
    this.rightisOpen = !this.rightisOpen;
    this.changerightside.emit(this.rightisOpen);
  }

  getColoriconR()
  {
    if (this.rightisOpen && window.innerWidth>1385)
      return 'rgb(127, 168, 80)';
    else
      return 'none';
  }

  getColoriconA()
  {
    if (this.trigger.menuOpen)
      return 'rgb(127, 168, 80)';
    else
      return 'none';
  }

  switchscreensize()
  {
    if(ScreenFull.isEnabled)
      ScreenFull.toggle();
  }

  openpopupalerte()
  {
    this.notif = 0;
  }
  
  getwindowsize(id)
  {
    if (window.innerWidth > 1720)
      return false;
    else if ( window.innerWidth > 1385 && id===2)
      return false;
    else
      return true;
  }
}
