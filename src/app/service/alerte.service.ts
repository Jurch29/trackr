
import { Injectable } from '@angular/core';
import { listAlertes } from '../provider/alerte-info-item';

@Injectable({
  providedIn: 'root'
})
export class AlerteService {

  constructor() { }


  getlistealert()
  {
    return listAlertes;
  }
}
