import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Robot } from '../model/Robot';
import { RobotService } from '../service/robot.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoserviceService } from '../service/infoservice.service';

@Directive({selector: 'mat-drawer'})
class ChildDirective {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit
{
  sideBarLeftIsOpen: boolean;
  sideBarRightIsOpen: boolean;
  mode = new FormControl('over');
  listeRobot: Robot[];
  i:number=0;
  y:number;
  alignement: string;
  route: string;
  activeClass: string;
  Label: string='Label';
  Navigateur: string;

  @ViewChild('drawerLeft', {static: false}) child1;
  @ViewChild('drawerRight', {static: false}) child2;

  ngOnInit() 
  {
    this.sideBarLeftIsOpen = this.getwindowsize(1);
    this.sideBarRightIsOpen = this.getwindowsize(2);
    this.route = this.router.url;  //on prend l'url courante et en fonction on applique le grisage
    this.changeActiveClass(this.route);
    this.getrobotlist();
    this.Navigateur = this.InfoS.getbrowser();
  }

  constructor(private RobotS: RobotService, private router: Router, private InfoS: InfoserviceService) { }

  sideBarLeftEvent(event :boolean)
  {
    this.child1.toggle();
  }

  sideBarRightEvent(event :boolean)
  {
    this.child2.toggle();
  }

  getwindowsize(id)
  {
    if (window.innerWidth > 1720)
      return true;
    else if (window.innerWidth > 1385 && id === 2)
      return true;
    else
      return false;
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

    var EmptySize = window.innerHeight - y;  //place restante = taille de l'écran - positioncurseur
    if (EmptySize > 110)
    {
      //alignement vers le haut
      this.alignement = '-65px';
    }
    else
    {
      //alignement vers le bas
      this.alignement = '-160px';
    }

    return this.alignement;
  }

  getWidth()
  {
    var tailleecran = window.innerWidth;
    var width = tailleecran - 270;
    var result = width.toString() + 'px';

    if (window.innerWidth < 1720 && window.innerWidth>1385)
      return result;
    else return '100%';
  }

  changeActiveClass(route){
    if(route.length <= 1){
      this.activeClass = '/home';
    }else{
      this.activeClass = route;
    }
  }

  onClickNav(route)
  {
    this.route = '/' + route;
    this.router.navigate([this.route]);
    this.changeActiveClass(this.route);
  }
}
