import { Injectable } from '@angular/core';
import { raclageprog } from '../model/raclageprog';
import { LISTRACLAGE } from '../provider/Liste-Raclage';
import {raclageinprogress} from '../provider/Liste-Raclage';
import {raclagetocomeup} from '../provider/Liste-Raclage';

@Injectable({
  providedIn: 'root'
})
export class RaclageService {

  constructor() { }

  i: number;

  getRaclageList(): raclageprog[]
  {
    return LISTRACLAGE;
  }

  getraclagefromlist(id): raclageprog
  {
    for (this.i=0 ; this.i<LISTRACLAGE.length; this.i++)
    {
      if (LISTRACLAGE[this.i].id === id)
      {
        return LISTRACLAGE[this.i];
      }
    }
  }

  getraclaheinprogress()
  {
    return raclageinprogress;
  }

  getraclagetocomeup()
  {
    return raclagetocomeup;
  }

  getnumberraclagedone()
  {
    return 9;
  }
}
