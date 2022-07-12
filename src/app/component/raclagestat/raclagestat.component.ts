import { Component, OnInit, Input } from '@angular/core';
import { InfoserviceService } from '../../service/infoservice.service';

@Component
({
  selector: 'raclagestat',
  templateUrl: './raclagestat.component.html',
  styleUrls: ['./raclagestat.component.css']
})
export class RaclagestatComponent implements OnInit 
{

  @Input() Histomode: boolean;
  Navigateur: string;

  constructor(private InfoS: InfoserviceService) { }

  ngOnInit() 
  {
    this.Navigateur = this.InfoS.getbrowser();
  }

  public barChartOptions:any = 
  {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barColors: any="#f04723";
  public barChartData:any[] = 
  [
    {data: [4, 5, 8, 8, 6, 2, 0], label: 'Raclages effectué'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void 
  {
    let data = 
    [
      Math.round(Math.random() * 20),
      Math.round(Math.random() * 20),
      Math.round(Math.random() * 20),
      Math.round(Math.random() * 20),
      Math.round(Math.random() * 20),
      Math.round(Math.random() * 5),
      // Math.round(Math.random() * 20)
    ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}
