import {Component, Input, OnInit} from '@angular/core';
import { InfoserviceService } from '../../service/infoservice.service';

@Component({
  selector: 'alerte-item',
  templateUrl: './alerte-item.component.html',
  styleUrls: ['./alerte-item.component.css']
})
export class AlerteItemComponent implements OnInit {

  @Input() niveau: number;
  @Input() titre: string;
  @Input() description: string;
  @Input() color: string;

  Navigateur: string;

  constructor(private InfoS: InfoserviceService) { }

  ngOnInit() 
  {
    this.Navigateur = this.InfoS.getbrowser();
  }

}
