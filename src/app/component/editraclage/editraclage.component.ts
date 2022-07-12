import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MatDialogRef} from "@angular/material";
import { RaclagedataService } from '../../service/raclagedata.service';

@Component({
  selector: 'app-editraclage',
  templateUrl: './editraclage.component.html',
  styleUrls: ['./editraclage.component.css']
})
export class EditraclageComponent implements OnInit {

  listbatiment: string[];
  listsalle: string[];
  nbraclage: number[];
  isperiodtodefine: boolean;

  constructor( private dialogRef: MatDialogRef<EditraclageComponent>, public snackBar: MatSnackBar, private dataR: RaclagedataService) 
  { }

  ngOnInit() 
  {
    this.isperiodtodefine = false;
    this.dataload();
  }

  validation()
  {
    console.log("valider");
    this.dialogRef.close();
    this.snackBar.open('Le raclage a bien été modifié', 'ID: 4', {duration: 2000,});
  }

  switchperiodtodefine()
  {
    this.isperiodtodefine = !this.isperiodtodefine;
  }

  Delete()
  {
    if (confirm("Etes vous sur ?"))
    {
      this.dialogRef.close();
      this.snackBar.open('Le raclage a bien été supprimé', 'ID : 4', {duration: 2000,});
    }
  }

  dataload()
  {
    this.listsalle = this.dataR.getlistsalle();
    this.listbatiment = this.dataR.getlistbatiment();
    this.nbraclage = this.dataR.getlistraclage();
  }

}
