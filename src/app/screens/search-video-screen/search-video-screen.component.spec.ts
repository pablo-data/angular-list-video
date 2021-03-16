import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVideoScreenComponent } from './search-video-screen.component';

describe('SearchVideoScreenComponent', () => {
  let component: SearchVideoScreenComponent;
  let fixture: ComponentFixture<SearchVideoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVideoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVideoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
