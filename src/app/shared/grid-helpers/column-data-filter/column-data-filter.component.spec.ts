import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDataFilterComponent } from './column-data-filter.component';

describe('ColumnDataFilterComponent', () => {
  let component: ColumnDataFilterComponent;
  let fixture: ComponentFixture<ColumnDataFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnDataFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnDataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
