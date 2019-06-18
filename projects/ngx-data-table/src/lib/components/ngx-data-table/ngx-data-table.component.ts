// vendor
import { Component, Input } from '@angular/core';
// models
import { NgxDataTable } from './../../models';
// configs
import * as fromNgxDataTableConfigs from '../../configs';

@Component({
  selector: 'ngx-data-table',
  styleUrls: ['./ngx-data-table.component.scss'],
  templateUrl: './ngx-data-table.component.html',
})
export class NgxDataTableComponent {
  @Input() dataTable: NgxDataTable;

  constructor() {
    this.dataTable = fromNgxDataTableConfigs.dataTable;
  }
}
