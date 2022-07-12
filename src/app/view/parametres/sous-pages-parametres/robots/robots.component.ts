import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { Robot } from '../../../../model/Robot';
import { RobotService } from '../../../../service/robot.service';
import { EditrobotComponent } from '../../../../component/editrobot/editrobot.component';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent implements OnInit 
{

  listeRobot: Robot[];
  i: number;

  constructor(private RobotS: RobotService, private dialog: MatDialog) { }

  ngOnInit()
  {
    this.getrobotlist();
  }

  getrobotlist()
  {
    this.listeRobot = this.RobotS.getRobotList();
  }

  getColor(id:string)
  {
    for(this.i=0 ; this.i<this.listeRobot.length; this.i++)
    {
      if (id === this.listeRobot[this.i].id)
      {
        if (this.listeRobot[this.i].status === 1)
        {
          return 'green';
        }
        else if (this.listeRobot[this.i].status === 2)
        {
          return 'orange';
        }
        else if (this.listeRobot[this.i].status === 3)
        {
          return 'red';
        }
      }
    }
  }

  clickonedit()
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    // dialogConfig.height = '540px';
    // dialogConfig.width = '540px';
    this.dialog.open(EditrobotComponent, dialogConfig);
  }

}
