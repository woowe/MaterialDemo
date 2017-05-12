import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text2SvgComponent } from './text2-svg.component';

describe('Text2SvgComponent', () => {
  let component: Text2SvgComponent;
  let fixture: ComponentFixture<Text2SvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text2SvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text2SvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
