import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CsvConversionComponent } from './components/csv-conversion/csv-conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvConversionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CsvConversionComponent]
})
export class AppModule { }
