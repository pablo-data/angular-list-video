import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsVideoScreenComponent } from './lists-video-screen.component';

describe('ListsVideoScreenComponent', () => {
  let component: ListsVideoScreenComponent;
  let fixture: ComponentFixture<ListsVideoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsVideoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsVideoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
