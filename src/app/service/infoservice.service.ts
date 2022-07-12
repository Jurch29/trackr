import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoserviceService {

  constructor() { }

  test: string = "lol";

  getbrowser() : string
  {
    if (navigator.userAgent.indexOf("Chrome") != -1)
      return "Chrome";
    else if (navigator.userAgent.indexOf("Mozilla") != -1)
      return "Mozilla";
  }

  set(id)
  {
    this.test = id;
  }
  get()
  {
    return this.test;
  }
}
