import { Component, OnInit, Input } from '@angular/core';
import { InfoserviceService } from '../../service/infoservice.service';

@Component
({
  selector: 'robotdetailcard',
  templateUrl: './robotdetailcard.component.html',
  styleUrls: ['./robotdetailcard.component.css']
})
export class RobotdetailcardComponent implements OnInit {

  Navigateur: string;

  @Input() color: string;
  @Input() texte: string;
  @Input() nombre: string;

  constructor(private InfoS: InfoserviceService) { }

  ngOnInit() {
    this.Navigateur = this.InfoS.getbrowser();
  }

}
