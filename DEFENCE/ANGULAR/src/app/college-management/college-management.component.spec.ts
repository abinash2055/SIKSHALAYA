import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CollegeManagementComponent } from './college-management.component';

describe('CollegeManagementComponent', () => {
  let component: CollegeManagementComponent;
  let fixture: ComponentFixture<CollegeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollegeManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollegeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
