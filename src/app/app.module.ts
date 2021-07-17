import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CsvConversionComponent } from './components/csv-conversion/csv-conversion.component';
import { TableInfoComponent } from './components/table-info/table-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvConversionComponent,
    TableInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CsvConversionComponent, TableInfoComponent]
})
export class AppModule { }
