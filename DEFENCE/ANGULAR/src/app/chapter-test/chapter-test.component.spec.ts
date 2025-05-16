import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTestComponent } from './chapter-test.component';

describe('ChapterTestComponent', () => {
  let component: ChapterTestComponent;
  let fixture: ComponentFixture<ChapterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChapterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
