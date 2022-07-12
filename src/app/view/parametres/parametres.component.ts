import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'parametres-view',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit 
{

  issideleftopen: boolean;
  issiderightopen: boolean;

  navLinks = 
  [
    {label: 'Compte', link: '/parametres/compte'},
    {label: 'Alerte', link: '/parametres/alerte'},
    {label: 'Carte de l\'élevage', link: '/parametres/elevage'},
    {label: 'Robots', link: '/parametres/robots'}
  ];

  activeLinkIndex = 0;

  constructor(private router: Router)
  {
    
  }

  ngOnInit()
  {

  }

  switchleftside(event :boolean)
  {
  	this.issideleftopen = event;
  }

  switchrightside(event :boolean)
  {
  	this.issiderightopen = event;
  }

}
