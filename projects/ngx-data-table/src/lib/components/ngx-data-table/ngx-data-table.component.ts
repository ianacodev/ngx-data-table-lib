// vendor
import { Component, Input } from '@angular/core';
// services
import { NgxDataTableSyncService } from '../../services';
// models
import { TableInput, NgxDataTable } from './../../models';
// mocks
import * as fromNgxDataTableTestMocks from '../../tests/mocks';
@Component({
  selector: 'ngx-data-table',
  styleUrls: ['./ngx-data-table.component.scss'],
  templateUrl: './ngx-data-table.component.html',
})
export class NgxDataTableComponent {
  ngxDataTable: NgxDataTable;
  @Input() set tableInput(tableInput: TableInput) {
    if (tableInput) {
      this.generateNgxDataTable(tableInput);
    }
  }

  constructor(private ngxDataTableSyncService: NgxDataTableSyncService) {
    const ngxDataTableCardSet = this.ngxDataTableSyncService.generateDataTableCardSet(
      fromNgxDataTableTestMocks.driverCardConfig,
      fromNgxDataTableTestMocks.drivers,
    );
    this.ngxDataTable = {
      cardSet: ngxDataTableCardSet,
    };
  }

  /**
   * Generate ngx data table.
   * @param tableInput
   */
  generateNgxDataTable(tableInput: TableInput): void {
    const ngxDataTableCardSet = this.ngxDataTableSyncService.generateDataTableCardSet(
      tableInput.config.cardConfig,
      tableInput.data,
    );
    this.ngxDataTable = {
      cardSet: ngxDataTableCardSet,
    };
  }
}
