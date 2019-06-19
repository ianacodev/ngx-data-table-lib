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
    ngxDataTableItemConfig: fromNgxDataTableModels.NgxDataTableItemConfig,
    dataItem: any,
  ): fromNgxDataTableModels.NgxDataTableItem {
    const baseNgxDataTableItem: fromNgxDataTableModels.NgxDataTableBaseItem = {
      id: ngxDataTableItemConfig.id,
      itemType: ngxDataTableItemConfig.itemType,
      itemName: ngxDataTableItemConfig.itemName,
      itemLabel: ngxDataTableItemConfig.itemLabel,
      itemValue: fromNgxDataTableUtils.resolveProperty(
        ngxDataTableItemConfig.itemKey,
        dataItem,
      ),
      classes: ngxDataTableItemConfig.classes,
      styles: ngxDataTableItemConfig.styles,
    };
    return this.ngxDataTableItemFunctionMap[ngxDataTableItemConfig.itemType](
      baseNgxDataTableItem,
      ngxDataTableItemConfig,
    );
  }

  /**
   * Generate ngx data table button item.
   * @param ngxDataTableItemConfig
   * @returns data table item
   */
  private generateNgxDataTableButtonItem(
    baseNgxDataTableItem: fromNgxDataTableModels.NgxDataTableBaseItem,
    ngxDataTableItemConfig: fromNgxDataTableModels.NgxDataTableButtonItemConfig,
  ): fromNgxDataTableModels.NgxDataTableButtonItem {
    const ngxDataTableButtonItem = {};
    return { ...baseNgxDataTableItem, ...ngxDataTableButtonItem };
  }

  /**
   * Generate ngx data table display item.
   * @param ngxDataTableItemConfig
   * @returns data table display item
   */
  private generateNgxDataTableDisplayItem(
    baseNgxDataTableItem: fromNgxDataTableModels.NgxDataTableBaseItem,
    ngxDataTableItemConfig: fromNgxDataTableModels.NgxDataTableDisplayItemConfig,
  ): fromNgxDataTableModels.NgxDataTableDisplayItem {
    const ngxDataTableDisplayItem = {};
    return { ...baseNgxDataTableItem, ...ngxDataTableDisplayItem };
  }

  /**
   * Generate ngx data table icon item.
   * @param baseNgxDataTableItem
   * @param NgxDataTableItemConfig
   * @returns data table icon item
   */
  private generateNgxDataTableIconItem(
    baseNgxDataTableItem: fromNgxDataTableModels.NgxDataTableBaseItem,
    ngxDataTableItemConfig: fromNgxDataTableModels.NgxDataTableIconItemConfig,
  ): fromNgxDataTableModels.NgxDataTableIconItem {
    const ngxDataTableIconItem = {
      height: ngxDataTableItemConfig.height,
      width: ngxDataTableItemConfig.width,
      src: ngxDataTableItemConfig.src,
    };
    return { ...baseNgxDataTableItem, ...ngxDataTableIconItem };
  }

  /**
   * Generate ngx data table link item.
   * @param NgxDataTableItemConfig
   * @returns data table icon item
   */
  private generateNgxDataTableLinkItem(
    baseNgxDataTableItem: fromNgxDataTableModels.NgxDataTableBaseItem,
    ngxDataTableItemConfig: fromNgxDataTableModels.NgxDataTableLinkItemConfig,
  ): fromNgxDataTableModels.NgxDataTableLinkItem {
    const ngxDataTableLinkItem = {
      href: ngxDataTableItemConfig.href,
      routeUrl: ngxDataTableItemConfig.routeUrl,
      target: ngxDataTableItemConfig.target,
    };
    return { ...baseNgxDataTableItem, ...ngxDataTableLinkItem };
  }
}
