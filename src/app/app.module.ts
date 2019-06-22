// vendor
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDataFormModule } from './../../projects/ngx-data-form/src/lib/ngx-data-form.module';
import { NgxDataTableModule } from './../../projects/ngx-data-table/src/lib/ngx-data-table.module';
// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDataFormModule, NgxDataTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
