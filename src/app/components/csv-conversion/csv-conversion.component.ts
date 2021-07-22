import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as csv from 'csvtojson';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-csv-conversion',
  templateUrl: './csv-conversion.component.html',
  styleUrls: ['./csv-conversion.component.scss']
})
export class CsvConversionComponent implements OnInit, OnDestroy {

  @Output() csvAry: EventEmitter<Array<Array<string>>> = new EventEmitter<Array<Array<string>>>();

  convertForm: FormGroup;

  subscriptionForCSVFieldChange: Subscription = null;

  constructor() { }

  ngOnInit() {

    this._formInitial();
  }

  ngOnDestroy() {

    this.subscriptionForCSVFieldChange.unsubscribe();
  }

  private _formInitial() {

    // reactive form -- start
    this.convertForm = new FormGroup({
      csv: new FormControl(''),
      json: new FormControl(''),
    });

    // reactive form -- end

    this.subscriptionForCSVFieldChange = this.formCSV.valueChanges.subscribe(  (val) => {
      // console.log(`val: ${val}`); // debug

      csv({
        noheader: true,
        output: 'csv',
      }).fromString(val)
        .then((csvAry: Array<Array<string>>) => {

          this.csvAry.emit(csvAry);


        });


    });
  }

  get formCSV() {
    return this.convertForm.get('csv');
  }

  get formJSON() {
    return this.convertForm.get('json');
  }


  onSubmitForCSVToJSON() {

    // Sample data:
    // Name,Country,Company
    // Marcus,USA,Apple Inc.
    // Pei-Ming,Sweden,IKEA Furnitures
    // Yu-Han,Finland,Nokia Communications

    csv()
      .fromString(this.formCSV.value)
      .then((jsonObj) => {

        this.formJSON.setValue(
          JSON.stringify(jsonObj),
        );

      });

  }
}
