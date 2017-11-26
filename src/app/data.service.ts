import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public sharedData: any;

  constructor(){
    this.sharedData = 0;
  }

  setData (data) {
    this.sharedData = data;
  }
  getData () {
    return this.sharedData;
  }
}
