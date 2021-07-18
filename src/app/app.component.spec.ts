import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AppComponent } from './app.component';
import { CsvConversionComponent } from './components/csv-conversion/csv-conversion.component';
import { TableInfoComponent } from './components/table-info/table-info.component';

describe('AppComponent', () => {

  let csvStr = '';
  let expectedCsvAry: string[][] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        AppComponent,CsvConversionComponent,TableInfoComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'csvToJson'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('csvToJson');
  });

  it(`should pass values from CsvConversionComponent to TableInfoComponent`, fakeAsync(() => {

    // preparation for appComponent
    const fixture = TestBed.createComponent(AppComponent);
    let appComponent = fixture.componentInstance;
    fixture.detectChanges();

    // preparation for CsvConversionComponent
    const fixtureCsv = TestBed.createComponent(CsvConversionComponent);
    let csvComponent = fixtureCsv.componentInstance;
    let csvAry: string[][] | undefined;
    csvComponent.ngOnInit();

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

    // set value to formCSV within csvComponent
    fixtureCsv.detectChanges();
    csvComponent.formCSV.setValue(csvStr);
    fixtureCsv.detectChanges();


    csvComponent.csvAry.pipe(first()).subscribe((val: any) => {
      csvAry = val;
    });

    // wait for csv's then() applied
    tick();

    // examine csvComponent.csvAry is equal to expectedCsvAry
    expect(csvAry).toEqual(expectedCsvAry);

    // call appComponent.onReceiveCSVInfo
    appComponent.onReceiveCSVInfo(csvAry);
    // appComponent detectChanges()
    fixture.detectChanges();

    // examine appComponent.receivedAry
    expect(appComponent.receivedAry).toEqual(expectedCsvAry);

  }));

});
