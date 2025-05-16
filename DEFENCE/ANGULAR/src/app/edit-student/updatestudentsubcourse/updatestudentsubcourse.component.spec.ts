import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestudentsubcourseComponent } from './updatestudentsubcourse.component';

describe('UpdatestudentsubcourseComponent', () => {
  let component: UpdatestudentsubcourseComponent;
  let fixture: ComponentFixture<UpdatestudentsubcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatestudentsubcourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatestudentsubcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
