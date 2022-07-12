
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoserviceService } from '../../service/infoservice.service';

@Component({
  selector: 'raclagetimeline',
  templateUrl: './raclagetimeline.component.html',
  styleUrls: ['./raclagetimeline.component.css']
})
export class RaclagetimelineComponent implements OnInit {

  @Input() raclages: Array<any>;
  @Input() titre: string;
  @Input() color: string;

  Navigateur: string;

  constructor(private InfoS: InfoserviceService) { }

  ngOnInit() {
    this.Navigateur = this.InfoS.getbrowser();
  }
}
