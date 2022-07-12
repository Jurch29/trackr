import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about-view',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  issideleftopen: boolean;
  issiderightopen: boolean;

  navLinks = 
  [
    {label: 'Mentions légales', link: '/about/mentions-l'},
    {label: 'Confidentialité', link: '/about/confidentialite'}
  ];

  activeLinkIndex = 0;

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
