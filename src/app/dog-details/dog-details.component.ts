import { Component, OnInit } from '@angular/core';
import { DogsServiceService } from '../dogs-service.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  private count:number = 0;

  constructor(private DogsService: DogsServiceService) {
    //sessionStorage.setItem('likeCount', this.count.toString());
  }

  ngOnInit(): void {
  }

  get getCount() {
    return this.count;
  }

  like() {
    this.count++;
    //sessionStorage.setItem('likeCount', this.count.toString());
  }

  addToFavorites() {
    this.DogsService.addToFavorites(/*pass something*/);
  }
}
