import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CsvConversionComponent } from './csv-conversion.component';
import { first } from 'rxjs/operators';

describe('CsvConversionComponent', () => {
  let component: CsvConversionComponent;
  let fixture: ComponentFixture<CsvConversionComponent>;
  let csvStr = '';
  let expectedCsvAry: string[][] = [];
  let jsonStr = '';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [CsvConversionComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    csvStr = `Name,Country,Company
    Marcus,USA,Apple Inc.
    Pei-Ming,Sweden,IKEA Furnitures
    Yu-Han,Finland,Nokia Communications`;

    expectedCsvAry = [
      ['Name', 'Country', 'Company'],
      ['Marcus', 'USA', 'Apple Inc.'],
      ['Pei-Ming', 'Sweden', 'IKEA Furnitures'],
      ['Yu-Han', 'Finland', 'Nokia Communications'],
    ];

    component.ngOnInit();
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit output value by inputed csv string for generating tableAry ', fakeAsync(() => {
    let csvAry: string[][] | undefined;


    // set value to formCSV field
    component.formCSV.setValue(csvStr);

    // let valueChanges apply to formCSV
    fixture.detectChanges();

    component.csvAry.pipe(first()).subscribe((val: any) => {
      csvAry = val;
    });

    // wait for csv's then() applied
    tick();

    expect(csvAry).toEqual(expectedCsvAry);

  }));


  it('should show json format string after clicking button of conversion csv', fakeAsync(() => {

    // set value to formCSV field
    component.formCSV.setValue(csvStr);

    // let valueChanges apply to formCSV
    fixture.detectChanges();

    // click conversion button
    component.onSubmitForCSVToJSON();

    // wait for csv()'s then()
    tick();


    jsonStr = `[{"Name":"Marcus","Country":"USA","Company":"Apple Inc."},
    {"Name":"Pei-Ming","Country":"Sweden","Company":"IKEA Furnitures"},
    {"Name":"Yu-Han","Country":"Finland","Company":"Nokia Communications"}]`;

    expect(component.formJSON.value).toEqual(jsonStr);

  }));



});

