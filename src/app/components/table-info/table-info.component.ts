import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.scss']
})
export class TableInfoComponent implements OnInit {

  /**
   * Use as table
   */
  @Input('tableAry')
  get tableAry() {
    return this._tableAry || [];
  }
  set tableAry(ary) {
    this._tableAry = ary || [];
  }

  /**
   * use as column name
   */
  get columnNameAry() {
    return this.tableAry[0] || [];
  }
  set columnNameAry(ary) {
    this._tableAry.splice(0, 1, ary);
  }

  /**
   * Use as data row
   */
  get recordAry() {
    let resultAry = [];
    if (this.tableAry.length > 1) {
      [, ...resultAry] = [...this.tableAry];
    }

    return resultAry;
  }


  private _tableAry: Array<Array<String>> = [];



  constructor() { }

  ngOnInit() {
  }

}
