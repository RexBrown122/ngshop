import { TestBed } from '@angular/core/testing';

import { DogsServiceService } from './dogs-service.service';

describe('DogsServiceService', () => {
  let service: DogsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all dog data', () => {
    expect(service.all).toEqual(dogs);
  });

  it('should be able to get information for 1 dog', () => {
    expect(service.get).toBeDefined();
  });

  it('should return all favorited dogs', () => {
    expect(service.getFavDog).toEqual(favDogs);
  });

  it('should add dog to favorites', () => {
    addToFavorites(dog);
    expect(service.getFavDog.length).toEqual(1);
  });
});