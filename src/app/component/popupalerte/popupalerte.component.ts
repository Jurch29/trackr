
import { Component, OnInit } from '@angular/core';
import { AlerteService } from '../../service/alerte.service';

@Component({
  selector: 'popupalerte',
  templateUrl: './popupalerte.component.html',
  styleUrls: ['./popupalerte.component.css']
})
export class PopupalerteComponent implements OnInit 
{
  alerttextcolor: string='black';

  listAlertes = [];

  constructor(private dataPU: AlerteService) 
  { 
  }

  ngOnInit() 
  {
    this.listAlertes = this.dataPU.getlistealert();
  }
}
