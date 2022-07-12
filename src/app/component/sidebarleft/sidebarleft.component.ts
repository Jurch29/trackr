import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoserviceService } from '../../service/infoservice.service';

@Component({
  selector: 'sidebarleft',
  templateUrl: './sidebarleft.component.html',
  styleUrls: ['./sidebarleft.component.css']
})
export class SideBarLeftComponent implements OnInit
{
  route: string;
  activeClass: string;
  Label: string='Label';
  Navigateur: string;

  constructor(private router: Router, private InfoS: InfoserviceService) {}

  ngOnInit()
  {
    this.route = this.router.url;  //on prend l'url courante et en fonction on applique le grisage
    this.changeActiveClass(this.route);
    this.Navigateur = this.InfoS.getbrowser();
  }

  changeActiveClass(route)
  {
    if(route.length <= 1){
      this.activeClass = '/home';
    }else{
      this.activeClass = route;
    }
  }

  onClickNav(route)
  {
    this.route = '/' + route;
    this.router.navigate([this.route]);
    this.changeActiveClass(this.route);
  }

}
