import { Injectable, OnInit } from '@angular/core';
import { Dog } from './dog';
import DOGS from './dogdata.json';

@Injectable({
  providedIn: 'root'
})
export class DogsServiceService {
  private dogData = DOGS;

  constructor() { }

  all() {
    return this.dogData;
  }

  get(id: string) {
    for (let i = 0; i < this.dogData.length; i++) {
      if (id == this.dogData[i].id) {
        return this.dogData[i];
      }
      else {
        return 0;
      }
    }
  }
}
