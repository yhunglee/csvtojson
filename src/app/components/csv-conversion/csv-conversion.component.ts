import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-csv-conversion',
  templateUrl: './csv-conversion.component.html',
  styleUrls: ['./csv-conversion.component.scss']
})
export class CsvConversionComponent implements OnInit {

  @Output() csvAry = new EventEmitter();

  convertForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this._formInitial();
  }


  private _formInitial() {

    // reactive form -- start
    this.convertForm = new FormGroup({
      'csv': new FormControl(''),
      'json': new FormControl(''),
    });

    // reactive form -- end
  }

  get formCSV() {
    return this.convertForm.get('csv');
  }

  get formJSON() {
    return this.convertForm.get('json');
  }


  onSubmitForCSVToJSON() {


  }
}
