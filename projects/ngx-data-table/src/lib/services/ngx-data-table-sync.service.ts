// vendor
import { Injectable } from '@angular/core';
// services
import { NgxDataTableItemService } from './ngx-data-table-item.service';
// models
import * as fromNgxDataTableModels from '../models';
// utils
import * as fromNgxDataTableUtils from '../utils';

@Injectable({
  providedIn: 'root',
})
export class NgxDataTableSyncService {
  constructor(private ngxDataTableItemService: NgxDataTableItemService) {}

  /**
   * Generate table data.
   * @param dataTableConfig
   * @param
   */
  generateCardTableData(
    dataTableConfig: fromNgxDataTableModels.NgxDataTableCardConfig,
    data: any,
  ): fromNgxDataTableModels.NgxDataTableCardSet {
    return data.map((dataItem: any) =>
      this.generateNgxDataTableCard(dataTableConfig, dataItem),
    );
  }

  /**
   * Generate ngx data table card.
   * @param dataTableConfig
   * @param dataItem
   * @returns ngx data table card
   */
  generateNgxDataTableCard(
    dataTableConfig: fromNgxDataTableModels.NgxDataTableCardConfig,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableCard {
    return {
      header: this.generateNgxDataTableCardHeader(
        dataTableConfig.header,
        dataItem,
      ),
      body: this.generateNgxDataTableCardBody(dataTableConfig.body, dataItem),
      footer: this.generateNgxDataTableCardFooter(
        dataTableConfig.footer,
        dataItem,
      ),
      data: dataItem,
    };
  }

  /**
   * Generate ngx data table card header.
   * @param ngxDataTableCardHeaderConfig
   * @param dataItem
   * @returns ngx data table card header
   */
  generateNgxDataTableCardHeader(
    ngxDataTableCardHeaderConfig: fromNgxDataTableModels.NgxDataTableCardHeaderConfig,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableCardHeader {
    return {
      label: fromNgxDataTableUtils.resolveProperty(
        ngxDataTableCardHeaderConfig.labelKey,
        dataItem,
      ),
      subLabel: fromNgxDataTableUtils.resolveProperty(
        ngxDataTableCardHeaderConfig.subLabelKey,
        dataItem,
      ),
    };
  }

  /**
   * Generate ngx data table card body.
   * @param ngxDataTableCardBodyConfig
   * @param DataItem
   * @returns ngx data table card body
   */
  generateNgxDataTableCardBody(
    ngxDataTableCardBodyConfig: fromNgxDataTableModels.NgxDataTableCardBodyConfig,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableCardBody {
    return {
      panelA: this.generateNgxDataTableCardItemSet(
        ngxDataTableCardBodyConfig.panelA,
        dataItem,
      ),
      panelB: this.generateNgxDataTableCardItemSet(
        ngxDataTableCardBodyConfig.panelB,
        dataItem,
      ),
      panelC: this.generateNgxDataTableCardItemSet(
        ngxDataTableCardBodyConfig.panelC,
        dataItem,
      ),
    };
  }

  /**
   * Generate ngx data table card footer.
   * @param ngxDataTableCardFooterConfig
   * @param DataItem
   * @returns ngx data table card footer
   */
  generateNgxDataTableCardFooter(
    ngxDataTableCardFooterConfig: fromNgxDataTableModels.NgxDataTableCardFooterConfig,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableCardFooter {
    const ngxDataTableItemSet: fromNgxDataTableModels.NgxDataTableItemSet = this.generateNgxDataTableCardItemSet(
      ngxDataTableCardFooterConfig.dataTableItemConfigSet,
      dataItem,
    );
    return {
      dataTableItemSet: ngxDataTableItemSet,
    };
  }

  /**
   * Generate ngx data table card item set.
   * @param ngxDataTableCardItemConfig
   * @param dataItem
   * @returns ngx data table item
   */
  generateNgxDataTableCardItemSet(
    ngxDataTableItemConfigSet: fromNgxDataTableModels.NgxDataTableItemConfigSet,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableItemSet {
    return ngxDataTableItemConfigSet.map(
      (ngxDataTableItemConfig: fromNgxDataTableModels.NgxDataTableItemConfig) =>
        this.ngxDataTableItemService.generateNgxDataTableItem(
          ngxDataTableItemConfig,
          dataItem,
        ),
    );
  }
}
