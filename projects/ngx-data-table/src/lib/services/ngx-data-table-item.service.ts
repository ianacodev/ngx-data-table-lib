// vendor
import { Injectable } from '@angular/core';
// models
import * as fromNgxDataTableModels from '../models';
// utils
import * as fromNgxDataTableUtils from '../utils';

@Injectable({
  providedIn: 'root',
})
export class NgxDataTableItemService {
  ngxDataTableItemFunctionMap: any;

  constructor() {
    this.ngxDataTableItemFunctionMap = {
      [fromNgxDataTableModels.NgxDataTableItemTypes.Button]: this
        .generateNgxDataTableButtonItem,
      [fromNgxDataTableModels.NgxDataTableItemTypes.Display]: this
        .generateNgxDataTableDisplayItem,
      [fromNgxDataTableModels.NgxDataTableItemTypes.Icon]: this
        .generateNgxDataTableIconItem,
      [fromNgxDataTableModels.NgxDataTableItemTypes.Link]: this
        .generateNgxDataTableLinkItem,
    };
  }

  /**
   * Generate ngx data table item.
   * @param NgxDataTableItemConfig
   * @param dataItem
   * @returns data table item
   */
  generateNgxDataTableItem(
    ngxDataTableItemConfig: fromNgxDataTableModels.NgxDataTableItem,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableItem {
    const baseNgxDataTableItem: fromNgxDataTableModels.NgxDataTableBaseItem = {
      id: ngxDataTableItemConfig.id,
      itemType: ngxDataTableItemConfig.itemType,
      itemName: ngxDataTableItemConfig.itemName,
      itemLabel: ngxDataTableItemConfig.itemLabel,
      itemKey: ngxDataTableItemConfig.itemKey,
      itemValue: fromNgxDataTableUtils.resolvePropertyValue(
        ngxDataTableItemConfig.itemKey,
        dataItem,
      ),
      classExp: ngxDataTableItemConfig.classExp,
      styleExp: ngxDataTableItemConfig.styleExp,
    };
    return this.ngxDataTableItemFunctionMap[ngxDataTableItemConfig.itemType](
      ngxDataTableItemConfig,
      baseNgxDataTableItem,
    );
  }

  /**
   * Generate ngx data table button item.
   * @param ngxDataTableButtonItemConfig
   * @param baseNgxDataTableItem
   * @returns data table item
   */
  private generateNgxDataTableButtonItem(
    ngxDataTableButtonItemConfig: fromNgxDataTableModels.NgxDataTableButtonItem,
    baseNgxDataTableItem: fromNgxDataTableModels.NgxDataTableBaseItem,
  ): fromNgxDataTableModels.NgxDataTableButtonItem {
    const ngxDataTableButtonItem = {
      actionType: ngxDataTableButtonItemConfig.actionType,
    };
    return { ...baseNgxDataTableItem, ...ngxDataTableButtonItem };
  }

  /**
   * Generate ngx data table display item.
   * @param ngxDataTableDisplayItemConfig
   * @param baseNgxDataTableItem
   * @returns data table display item
   */
  private generateNgxDataTableDisplayItem(
    ngxDataTableDisplayItemConfig: fromNgxDataTableModels.NgxDataTableDisplayItem,
    baseNgxDataTableItem: fromNgxDataTableModels.NgxDataTableBaseItem,
  ): fromNgxDataTableModels.NgxDataTableDisplayItem {
    const ngxDataTableDisplayItem = {
      hideLabel: ngxDataTableDisplayItemConfig.hideLabel,
    };
    return { ...baseNgxDataTableItem, ...ngxDataTableDisplayItem };
  }

  /**
   * Generate ngx data table icon item.
   * @param ngxDataTableIconItemConfig
   * @param baseNgxDataTableItem
   * @returns data table icon item
   */
  private generateNgxDataTableIconItem(
    ngxDataTableIconItemConfig: fromNgxDataTableModels.NgxDataTableIconItem,
    baseNgxDataTableItem: fromNgxDataTableModels.NgxDataTableBaseItem,
  ): fromNgxDataTableModels.NgxDataTableIconItem {
    const ngxDataTableIconItem = {
      iconType: ngxDataTableIconItemConfig.iconType,
      src: ngxDataTableIconItemConfig.src,
    };
    return { ...baseNgxDataTableItem, ...ngxDataTableIconItem };
  }

  /**
   * Generate ngx data table link item.
   * @param ngxDataTableItemConfig
   * @param baseNgxDataTableItem
   * @returns data table icon item
   */
  private generateNgxDataTableLinkItem(
    ngxDataTableLinkItemConfig: fromNgxDataTableModels.NgxDataTableLinkItem,
    baseNgxDataTableItem: fromNgxDataTableModels.NgxDataTableBaseItem,
  ): fromNgxDataTableModels.NgxDataTableLinkItem {
    const ngxDataTableLinkItem = {
      linkType: ngxDataTableLinkItemConfig.linkType,
      href: ngxDataTableLinkItemConfig.href,
      routeUrl: ngxDataTableLinkItemConfig.routeUrl,
      target: ngxDataTableLinkItemConfig.target,
    };
    return { ...baseNgxDataTableItem, ...ngxDataTableLinkItem };
  }
}
