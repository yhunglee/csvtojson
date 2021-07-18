import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInfoComponent } from './table-info.component';

describe('TableInfoComponent', () => {
  let component: TableInfoComponent;
  let fixture: ComponentFixture<TableInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInfoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only render column names in table', () => {

    const tableAry = [['name', 'address', 'company name']];
    component.tableAry = tableAry;

    expect(component.columnNameAry).toEqual(tableAry[0]);
  });

  it('should render both of column names and data rows', () => {

    const columnNameAry = ['Name', 'Country', 'Company'];
    const recordAry = [
      ['Marcus', 'USA', 'Apple Inc.'],
      ['Pei-Ming', 'Sweden', 'IKEA Furnitures'],
      ['Yu-Han', 'Finland', 'Nokia Communications'],
    ]
    const tableAry = [
      columnNameAry,
      ...recordAry,
    ];

    component.tableAry = tableAry;
    expect(component.tableAry).toEqual(tableAry);
    expect(component.columnNameAry).toEqual(columnNameAry);
    expect(component.recordAry).toEqual(recordAry);

  });
});
