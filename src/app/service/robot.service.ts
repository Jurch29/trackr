
import { Injectable, OnInit } from '@angular/core';
import { Robot } from '../model/Robot';
import { LISTROBOT } from '../provider/Liste-Robot';

@Injectable()
export class RobotService implements OnInit
{
  constructor()
  {}

  InfoRobot: Robot;

  ngOnInit()
  {}

  i: number;

  getRobotList(): Robot[]{
    return LISTROBOT;
  }

  getrobotfromlist(id): Robot{
    for (this.i=0 ; this.i<LISTROBOT.length; this.i++){
      if (LISTROBOT[this.i].id === id){
        return LISTROBOT[this.i];
      }
    }
  }

  getnumberrobotfonctionnement(){
    return 8;
  }
  getnumberrobotpanne(){
    return 5;
  }
  getnumberrobotinactif(){
    return 6;
  }
}
