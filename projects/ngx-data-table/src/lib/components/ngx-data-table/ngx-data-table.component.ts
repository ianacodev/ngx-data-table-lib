// vendor
import { Component, Input, OnInit } from '@angular/core';
// services
import { NgxDataTableSyncService } from '../../services';
// models
import { NgxDataTable, NgxDataTableCardSet } from './../../models';
// mocks
import * as fromNgxDataTableTestMocks from '../../tests/mocks';

@Component({
  selector: 'ngx-data-table',
  styleUrls: ['./ngx-data-table.component.scss'],
  templateUrl: './ngx-data-table.component.html',
})
export class NgxDataTableComponent implements OnInit {
  ngxDataTableCardSet: NgxDataTableCardSet;
  @Input() data: any;
  @Input() dataTableConfig: NgxDataTable;

  constructor(private ngxDataTableSyncService: NgxDataTableSyncService) {
    this.data = fromNgxDataTableTestMocks.drivers;
    this.dataTableConfig = {
      card: fromNgxDataTableTestMocks.driverCardConfig,
    };
  }

  ngOnInit() {
    this.ngxDataTableCardSet = this.ngxDataTableSyncService.generateDataTableCardSet(
      this.dataTableConfig.card,
      this.data,
    );
  }
}
