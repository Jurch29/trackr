
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {MatSnackBar} from '@angular/material';
import { RaclagedataService } from '../../service/raclagedata.service';

@Component({
  selector: 'app-addraclage',
  templateUrl: './addraclage.component.html',
  styleUrls: ['./addraclage.component.css']
})
export class AddraclageComponent implements OnInit 
{
  listbatiment: string[];
  listsalle: string[];
  listsite: string[];
  nbraclage: number[];
  isperiodtodefine: boolean;

  constructor( private dialogRef: MatDialogRef<AddraclageComponent>, public snackBar: MatSnackBar, private dataR: RaclagedataService)
  { }

  ngOnInit()
  {
    this.isperiodtodefine = true;
    this.dataload();
  }

  validation()
  {
    console.log("valider");
    this.dialogRef.close();
    this.snackBar.open('Le raclage a bien été ajouté', 'Identifiant : B15X', {duration: 2000,});
  }

  switchperiodtodefine()
  {
    this.isperiodtodefine = !this.isperiodtodefine;
  }

  dataload()
  {
    this.listsalle = this.dataR.getlistsalle();
    this.listbatiment = this.dataR.getlistbatiment();
    this.listsite = this.dataR.getlistsite();
    this.nbraclage = this.dataR.getlistraclage();
  }

}
