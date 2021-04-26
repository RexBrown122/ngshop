import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListComponentComponent } from './dog-list-component.component';

describe('DogListComponentComponent', () => {
  let component: DogListComponentComponent;
  let fixture: ComponentFixture<DogListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a page title', () => {
    expect(fixture.nativeElement.querySelector('#pageTitle')).toBeDefined();
  });

  it('should receive all data of the dogs', () => {
    expect(component.getAll()).toBeDefined();
  });
});
