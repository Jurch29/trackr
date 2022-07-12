import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-edit-elevage-structure',
  templateUrl: './edit-elevage-structure.component.html',
  styleUrls: ['./edit-elevage-structure.component.css']
})
export class EditElevageStructureComponent implements OnInit {

  id: number;
  texteD: string;
  texteE: string

  constructor(private dialogRef: MatDialogRef<EditElevageStructureComponent>, @Inject(MAT_DIALOG_DATA) public data, public snackBar: MatSnackBar) 
  { 
    this.id = data.id;
  }

  ngOnInit() 
  {
    switch(this.id)
    {
      case 1:
      {
        this.texteD = 'Le site a bien été supprimé.';
        this.texteE = 'Le site a bien été modifié.';
        break;
      }
      case 2:
      {
        this.texteD = 'Le batiment a bien été supprimé.';
        this.texteE = 'Le batiment a bien été modifié.';
        break;
      }
      case 3:
      {
        this.texteD = 'La salle a bien été supprimé.';
        this.texteE = 'Le salle a bien été modifié.';
        break;
      }
    }
  }

  validation()
  {
    console.log("valider");
    this.dialogRef.close();
    this.snackBar.open(this.texteE, 'ID: 4', {
      duration: 2000,
    });
  }

  Delete()
  {
    if (confirm("Etes vous sur ?"))
    {
      this.dialogRef.close();
      this.snackBar.open(this.texteD, 'ID : 4', {
      duration: 2000,
    });
    }
  }

}
