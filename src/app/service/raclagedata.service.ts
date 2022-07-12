import { Injectable } from '@angular/core';

import { LISTSALLE, LISTBATIMENT, NBRACLAGE, LISTSITE } from '../provider/raclage-data-builder';

@Injectable({
  providedIn: 'root'
})
export class RaclagedataService 
{

  constructor() { }

  getlistsalle() : string[]
  {
    return LISTSALLE;
  }

  getlistbatiment() : string[]
  {
    return LISTBATIMENT;
  }

  getlistraclage() : number[]
  {
    return NBRACLAGE;
  }

  getlistsite() : string[]
  {
    return LISTSITE;
  }

}
