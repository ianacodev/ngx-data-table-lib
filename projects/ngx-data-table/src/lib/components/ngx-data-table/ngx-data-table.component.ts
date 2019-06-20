// vendor
import { Component, Input, OnInit } from '@angular/core';
// services
import { NgxDataTableSyncService } from '../../services';
// models
import { NgxDataTable, NgxDataTableConfig } from './../../models';
// mocks
import * as fromNgxDataTableTestMocks from '../../tests/mocks';

@Component({
  selector: 'ngx-data-table',
  styleUrls: ['./ngx-data-table.component.scss'],
  templateUrl: './ngx-data-table.component.html',
})
export class NgxDataTableComponent implements OnInit {
  ngxDataTable: NgxDataTable;
  @Input() data: any;
  @Input() dataTableConfig: NgxDataTableConfig;

  constructor(private ngxDataTableSyncService: NgxDataTableSyncService) {
    // temp default data
    this.data = fromNgxDataTableTestMocks.drivers;
    this.dataTableConfig = {
      cardConfig: fromNgxDataTableTestMocks.driverCardConfig,
    };
  }

  ngOnInit() {
    const ngxDataTableCardSet = this.ngxDataTableSyncService.generateDataTableCardSet(
      this.dataTableConfig.cardConfig,
      this.data,
    );
    this.ngxDataTable = {
      cardSet: ngxDataTableCardSet,
    };
  }
}
