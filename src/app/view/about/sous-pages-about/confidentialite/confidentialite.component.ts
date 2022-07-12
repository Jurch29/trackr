import { Component, OnInit } from '@angular/core';
import { InfoserviceService } from '../../../../service/infoservice.service';

@Component({
  selector: 'app-confidentialite',
  templateUrl: './confidentialite.component.html',
  styleUrls: ['./confidentialite.component.css']
})
export class ConfidentialiteComponent implements OnInit {

  constructor(private InfoS: InfoserviceService) { }

  Navigateur;

  ngOnInit() 
  {
    this.Navigateur = this.InfoS.getbrowser();
  }

}
