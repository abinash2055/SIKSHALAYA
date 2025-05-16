import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionManagementComponent } from './discussion-management.component';

describe('DiscussionManagementComponent', () => {
  let component: DiscussionManagementComponent;
  let fixture: ComponentFixture<DiscussionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscussionManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscussionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
