import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvConversionComponent } from './csv-conversion.component';

describe('CsvConversionComponent', () => {
  let component: CsvConversionComponent;
  let fixture: ComponentFixture<CsvConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
