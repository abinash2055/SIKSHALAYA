import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCMNotificationComponent } from './fcmnotification.component';

describe('FCMNotificationComponent', () => {
  let component: FCMNotificationComponent;
  let fixture: ComponentFixture<FCMNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FCMNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FCMNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
