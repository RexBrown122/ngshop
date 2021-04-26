import { Injectable, OnInit } from '@angular/core';
import { Dog } from './dog';
import DOGS from './dogdata.json';

@Injectable({
  providedIn: 'root'
})
export class DogsServiceService {

  private dogData = DOGS;
  private favDogs: Array<Dog> = [];

  constructor() {
    sessionStorage.setItem('Favorites', JSON.stringify(this.favDogs));
    console.log(this.favDogs);
  }

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

  addToFavorites(newDog:Dog) {
    console.log(newDog);
    this.favDogs.push(newDog);
    sessionStorage.setItem('Favorites', JSON.stringify(this.favDogs));
  }

  get getFavDog(){
    return this.favDogs;
  }
}
