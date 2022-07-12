import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Robot } from '../../model/Robot';
import { RobotService } from '../../service/robot.service';
import { InfoserviceService } from '../../service/infoservice.service';

@Component({
  selector: 'sidebarright',
  templateUrl: './sidebarright.component.html',
  styleUrls: ['./sidebarright.component.css']
})
export class SideBarRightComponent implements OnInit
{
  constructor(private RobotS: RobotService, private InfoS: InfoserviceService) { }

  listeRobot: Robot[];
  i:number=0;
  y:number;
  alignement: string;
  Navigateur: string;

  ngOnInit()
  {
    this.getrobotlist();
    this.Navigateur = this.InfoS.getbrowser();
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

  getplacement(event)
  {
    var y = event.y;

    var EmptySize = window.innerHeight - y;
    if (EmptySize > 110)
    {
      this.alignement = '-65px';
    }
    else
    {
      this.alignement = '-160px';
    }

    return this.alignement;
  }

  mouseEnter(div : string, i){
    console.log("id du robot : " + div + " alignement : " + this.alignement);
    console.log(document.getElementById("gris-"+i).offsetTop);

  }

  mouseLeave(div : string)
  {
    console.log('mouse leave :' + div);
  }
}
