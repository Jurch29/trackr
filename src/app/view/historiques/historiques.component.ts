import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'historiques-view',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.css']
})
export class HistoriquesComponent implements OnInit {

  issideleftopen: boolean;
  issiderightopen: boolean;

  constructor() 
  {}

  ngOnInit()
  {}

  switchleftside(event :boolean){
  	this.issideleftopen = event;
  }

  switchrightside(event :boolean){
  	this.issiderightopen = event;
  }

}
