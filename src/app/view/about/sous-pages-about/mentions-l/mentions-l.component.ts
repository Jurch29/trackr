import { Component, OnInit } from '@angular/core';
import { InfoserviceService } from '../../../../service/infoservice.service';

@Component({
  selector: 'app-mentions-l',
  templateUrl: './mentions-l.component.html',
  styleUrls: ['./mentions-l.component.css']
})
export class MentionsLComponent implements OnInit {

  constructor(private InfoS: InfoserviceService) { }

  Navigateur;

  ngOnInit() 
  {
    this.Navigateur = this.InfoS.getbrowser();
  }

}
