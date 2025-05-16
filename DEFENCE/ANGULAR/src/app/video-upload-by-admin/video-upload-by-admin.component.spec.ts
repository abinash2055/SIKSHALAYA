import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUploadByAdminComponent } from './video-upload-by-admin.component';

describe('VideoUploadByAdminComponent', () => {
  let component: VideoUploadByAdminComponent;
  let fixture: ComponentFixture<VideoUploadByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoUploadByAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoUploadByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
