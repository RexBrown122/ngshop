import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogDetailsComponent } from './dog-details.component';

describe('DogDetailsComponent', () => {
  let component: DogDetailsComponent;
  let fixture: ComponentFixture<DogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render like button', ()=>{
    expect(fixture.nativeElement.querySelector('button')).toBeDefined();
  })

  it('should render like value', ()=>{
    expect(fixture.nativeElement.querySelector('label')).toBeDefined();
  })

  it('should increment value when clicking like button', ()=>{
    component.like();
    expect(component.getCount).toEqual(1);
  })
  
  it('should increment value when clicking like button multiple times', ()=>{
    component.like();
    component.like();
    component.like();
    expect(component.getCount).toEqual(3);
  })
});
