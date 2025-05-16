import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNoteManagementComponent } from './user-note-management.component';

describe('UserNoteManagementComponent', () => {
  let component: UserNoteManagementComponent;
  let fixture: ComponentFixture<UserNoteManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserNoteManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserNoteManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
