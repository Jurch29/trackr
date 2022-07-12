import { Component, OnInit } from '@angular/core';
import { InfoserviceService } from '../../service/infoservice.service';
import { AlerteService } from '../../service/alerte.service';
import { RaclageService } from '../../service/raclage.service';
import { RobotService } from '../../service/robot.service';

@Component({
  selector: 'home-view',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  Navigateur: string;

  listAlertes = [];
  RaclageEncoursInfos = [];
  ProchainsRaclagesInfos = [];

  nbraclagedone = this.raclageService.getnumberraclagedone();
  nbrobotinuse = this.robotS.getnumberrobotfonctionnement();
  nbrobotinactif = this.robotS.getnumberrobotinactif();
  nbrobotenpanne = this.robotS.getnumberrobotpanne();

  constructor(private InfoS: InfoserviceService, private dataPU: AlerteService,
  private raclageService: RaclageService, private robotS: RobotService) 
  {}

  ngOnInit() {
    this.Navigateur = this.InfoS.getbrowser();
    this.listAlertes = this.dataPU.getlistealert();
    this.RaclageEncoursInfos = this.raclageService.getraclaheinprogress();
    this.ProchainsRaclagesInfos = this.raclageService.getraclagetocomeup();
  }
}
