
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MatDialogRef} from "@angular/material";
import { RaclagedataService } from '../../service/raclagedata.service';


@Component({
  selector: 'app-editrobot',
  templateUrl: './editrobot.component.html',
  styleUrls: ['./editrobot.component.css']
})
export class EditrobotComponent implements OnInit {

  listbatiment: string[];
  listsalle: string[];
  nbraclage: number[];
  isperiodtodefine: boolean;

  constructor( private dialogRef: MatDialogRef<EditrobotComponent>, public snackBar: MatSnackBar, private dataR: RaclagedataService)
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
    this.snackBar.open('Le robot a bien été modifié', 'ID: 4', {
      duration: 2000,
    });
  }

  Delete()
  {
    if (confirm("Etes vous sur ?"))
    {
      this.dialogRef.close();
      this.snackBar.open('Le robot a bien été supprimé', 'ID : 4', {
      duration: 2000,
    });
    }
  }

  dataload()
  {
    this.listsalle = this.dataR.getlistsalle();
    this.listbatiment = this.dataR.getlistbatiment();
    this.nbraclage = this.dataR.getlistraclage();
  }
}


