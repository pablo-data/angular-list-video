import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosGroupComponent } from './videos-group.component';

describe('VideosGroupComponent', () => {
  let component: VideosGroupComponent;
  let fixture: ComponentFixture<VideosGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
