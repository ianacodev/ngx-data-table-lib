// models
import { Map, NgxDataTableItemTypes } from '../../models';
// imports
import { NgxDataTableBaseItemComponent } from './ngx-data-table-base-item/ngx-data-table-base-item.component';
import { NgxDataTableButtonItemComponent } from './ngx-data-table-button-item/ngx-data-table-button-item.component';
import { NgxDataTableDisplayItemComponent } from './ngx-data-table-display-item/ngx-data-table-display-item.component';
import { NgxDataTableIconItemComponent } from './ngx-data-table-icon-item/ngx-data-table-icon-item.component';
import { NgxDataTableLinkItemComponent } from './ngx-data-table-link-item/ngx-data-table-link-item.component';
// exports
export * from './ngx-data-table-base-item/ngx-data-table-base-item.component';
export * from './ngx-data-table-button-item/ngx-data-table-button-item.component';
export * from './ngx-data-table-display-item/ngx-data-table-display-item.component';
export * from './ngx-data-table-icon-item/ngx-data-table-icon-item.component';
// export group
export const ngxDataTableTemplateComponents: any[] = [
  NgxDataTableBaseItemComponent,
  NgxDataTableButtonItemComponent,
  NgxDataTableDisplayItemComponent,
  NgxDataTableIconItemComponent,
  NgxDataTableLinkItemComponent,
];
// export data table item component map
export const ngxDataTableItemComponentMap: Map = {
  [NgxDataTableItemTypes.Button]: NgxDataTableButtonItemComponent,
  [NgxDataTableItemTypes.Display]: NgxDataTableDisplayItemComponent,
  [NgxDataTableItemTypes.Icon]: NgxDataTableIconItemComponent,
  [NgxDataTableItemTypes.Link]: NgxDataTableLinkItemComponent,
};
