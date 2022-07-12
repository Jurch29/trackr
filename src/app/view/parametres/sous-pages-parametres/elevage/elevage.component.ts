import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elevage',
  templateUrl: './elevage.component.html',
  styleUrls: ['./elevage.component.css']
})
export class ElevageComponent implements OnInit {

  editmode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
