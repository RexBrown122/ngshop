import { Component, OnInit } from '@angular/core';
import { DogsServiceService } from '../dogs-service.service';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  private dogs = this.getAll();
  private count:number = 0;

  constructor(private dogsService: DogsServiceService) { }

  ngOnInit(): void {
  }

  get getCount() {
    return this.count;
  }
  
  like() {
    this.count++;
  }

  get getDogs() {
    return this.dogs;
  }

  getAll() {
    return this.dogsService.all();
  }

}
