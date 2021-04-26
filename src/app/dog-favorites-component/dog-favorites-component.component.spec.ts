import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFavoritesComponentComponent } from './dog-favorites-component.component';

describe('DogFavoritesComponentComponent', () => {
  let component: DogFavoritesComponentComponent;
  let fixture: ComponentFixture<DogFavoritesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogFavoritesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFavoritesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
