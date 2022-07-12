import { Component, OnInit } from '@angular/core';
import {raclageprog} from '../../model/raclageprog';
import { RaclageService } from '../../service/raclage.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { AddraclageComponent } from '../../component/addraclage/addraclage.component';
import { InfoserviceService } from '../../service/infoservice.service';
import { EditraclageComponent } from '../../component/editraclage/editraclage.component';

@Component({
  selector: 'raclages-view',
  templateUrl: './raclages.component.html',
  styleUrls: ['./raclages.component.css']
})
export class RaclagesComponent implements OnInit 
{

  issideleftopen: boolean;
  issiderightopen: boolean;
  cols:number;
  Navigateur: string;

  constructor(private RaclageS: RaclageService, private dialog: MatDialog, private InfoS: InfoserviceService)
  {
  }

  listeRaclage: raclageprog[];

  ngOnInit()
  {
    this.getraclagelist();
    this.Navigateur = this.InfoS.getbrowser();
  }

  getraclagelist()
  {
    this.listeRaclage = this.RaclageS.getRaclageList();
  }

  switchleftside(event :boolean)
  {
  	this.issideleftopen = event;
  }

  switchrightside(event :boolean)
  {
  	this.issiderightopen = event;
  }

  clickonedit()
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    // dialogConfig.height = '540px';
    // dialogConfig.width = '540px';
    this.dialog.open(EditraclageComponent, dialogConfig);
  }

  Addraclage() 
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddraclageComponent, dialogConfig);
  }

  calcGridColumns()
  {
    if (window.innerWidth > 1180)
    {
      this.cols = 3;
      return 3;
    }
    else if (window.innerWidth > 765)
    {
      this.cols = 2;
      return 2;
    }
    else
    {
      this.cols = 1;
      return 1;
    }
  }

  getContainerWidth()
  {
    if (window.innerWidth > 1180)
      return '1260px';
    else
      return '840px';
  }

}
