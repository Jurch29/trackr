import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'help-view',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

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
