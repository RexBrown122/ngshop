import { Component, OnInit } from '@angular/core';
import { DogsServiceService } from '../dogs-service.service';


@Component({
  selector: 'app-dog-list-component',
  templateUrl: './dog-list-component.component.html',
  styleUrls: ['./dog-list-component.component.css']
})
export class DogListComponentComponent implements OnInit {

  private dogs = this.getAll();

  constructor(private dogsService: DogsServiceService) {  }

  
  ngOnInit(): void {
  }

  get getDogs() {
    return this.dogs;
  }

  getAll() {
    return this.dogsService.all();
  }

}
