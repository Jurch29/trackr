import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EditElevageStructureComponent } from '../../component/edit-elevage-structure/edit-elevage-structure.component';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { StructureelevageService } from '../../service/structureelevage.service';

@Component
({
  selector: 'carteelevage',
  templateUrl: './carteelevage.component.html',
  styleUrls: ['./carteelevage.component.css'],
})

export class CarteelevageComponent implements OnInit
{
  panelOpenState: boolean = false;
  @Input() Isediton: boolean;

  @ViewChild('level1', {static: false}) child1;
  @ViewChild('level2', {static: false}) child2;

  constructor(private dialog: MatDialog, private dataStructE: StructureelevageService)
  {}

  data=[];

  ngOnInit()
  {
    this.data = this.dataStructE.getstructelevage();
  }

  Modifier(id)
  {
    if (id === 1)
    {
      this.child1.toggle();
    }
    else if (id === 2)
    {
      this.child2.toggle();
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = 
    {
      id: id
    }
    this.dialog.open(EditElevageStructureComponent, dialogConfig);
  }

}

