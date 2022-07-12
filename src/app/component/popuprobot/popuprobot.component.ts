import { Component, OnInit, Input } from '@angular/core';
import { Robot } from '../../model/Robot';
import { RobotService } from '../../service/robot.service';

@Component({
  selector: 'popuprobot',
  templateUrl: './popuprobot.component.html',
  styleUrls: ['./popuprobot.component.css']
})
export class PopuprobotComponent implements OnInit {

  constructor(private RobotS: RobotService) { }

  robottodisplay: Robot;
  @Input() idrobottodisplay: string;
  i: number;

  ngOnInit() 
  {
    this.getrobot();
  }


  getrobot()
  {
    this.robottodisplay = this.RobotS.getrobotfromlist(this.idrobottodisplay);
  }

  getColor()
  {
        if (this.robottodisplay.status === 1)
        {
          return 'green';
        }
        else if (this.robottodisplay.status === 2)
        {
          return 'orange';
        }
        else if (this.robottodisplay.status === 3)
        {
          return 'red';
        }
  }
}
