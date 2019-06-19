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
   * Generate data table card set.
   * @param dataTableConfig
   * @param data
   * @returns ngx data table card set
   */
  generateDataTableCardSet(
    dataTableCardConfig: fromNgxDataTableModels.NgxDataTableCard,
    data: any[],
  ): fromNgxDataTableModels.NgxDataTableCardSet {
    return data.map((dataItem: any) =>
      this.generateNgxDataTableCard(dataTableCardConfig, dataItem),
    );
  }

  /**
   * Generate ngx data table card.
   * @param dataTableCardConfig
   * @param dataItem
   * @returns ngx data table card
   */
  private generateNgxDataTableCard(
    dataTableCardConfig: fromNgxDataTableModels.NgxDataTableCard,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableCard {
    return {
      header: this.generateNgxDataTableCardHeader(
        dataTableCardConfig.header,
        dataItem,
      ),
      body: this.generateNgxDataTableCardBody(
        dataTableCardConfig.body,
        dataItem,
      ),
      footer: this.generateNgxDataTableCardFooter(
        dataTableCardConfig.footer,
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
  private generateNgxDataTableCardHeader(
    ngxDataTableCardHeaderConfig: fromNgxDataTableModels.NgxDataTableCardHeader,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableCardHeader {
    return {
      label: fromNgxDataTableUtils.resolvePropertyValue(
        ngxDataTableCardHeaderConfig.labelKey,
        dataItem,
      ),
      subLabel: fromNgxDataTableUtils.resolvePropertyValue(
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
  private generateNgxDataTableCardBody(
    ngxDataTableCardBodyConfig: fromNgxDataTableModels.NgxDataTableCardBody,
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
  private generateNgxDataTableCardFooter(
    ngxDataTableCardFooterConfig: fromNgxDataTableModels.NgxDataTableCardFooter,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableCardFooter {
    const ngxDataTableItemSet: fromNgxDataTableModels.NgxDataTableItemSet = this.generateNgxDataTableCardItemSet(
      ngxDataTableCardFooterConfig.dataTableItemSet,
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
  private generateNgxDataTableCardItemSet(
    ngxDataTableItemConfigSet: fromNgxDataTableModels.NgxDataTableItemSet,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableItemSet {
    return ngxDataTableItemConfigSet.map(
      (ngxDataTableItemConfig: fromNgxDataTableModels.NgxDataTableItem) =>
        this.ngxDataTableItemService.generateNgxDataTableItem(
          ngxDataTableItemConfig,
          dataItem,
        ),
    );
  }
}
