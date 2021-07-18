import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'csvToJson';

  /**
   * Received data array from app-csv-conversion componenent.
   *
   */
  receivedAry: Array<Array<string>> = [];

  constructor() {

  }

  onReceiveCSVInfo(csvAry) {

    this.receivedAry = csvAry;

  }
}
