import { Injectable } from '@angular/core';
import { data } from '../provider/struct-elevage';

@Injectable({
  providedIn: 'root'
})
export class StructureelevageService 
{

  constructor() 
  { }

  getstructelevage()
  {
    return data;
  }
}
