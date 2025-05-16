import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardManagementComponent } from './notice-board-management.component';

describe('NoticeBoardManagementComponent', () => {
  let component: NoticeBoardManagementComponent;
  let fixture: ComponentFixture<NoticeBoardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticeBoardManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeBoardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
