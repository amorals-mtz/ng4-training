import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialShowcaseComponent } from './material-showcase.component';

describe('MaterialShowcaseComponent', () => {
  let component: MaterialShowcaseComponent;
  let fixture: ComponentFixture<MaterialShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
