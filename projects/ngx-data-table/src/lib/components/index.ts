// imports
import { NgxDataTableCardComponent } from './ngx-data-table-card/ngx-data-table-card.component';
import { NgxDataTableCardBodyComponent } from './ngx-data-table-card-body/ngx-data-table-card-body.component';
import { NgxDataTableCardSetComponent } from './ngx-data-table-card-set/ngx-data-table-card-set.component';
import { NgxDataTableCardHeaderComponent } from './ngx-data-table-card-header/ngx-data-table-card-header.component';
import { NgxDataTableCardFooterComponent } from './ngx-data-table-card-footer/ngx-data-table-card-footer.component';
import { NgxDataTableComponent } from './ngx-data-table/ngx-data-table.component';
import { NgxDataTableItemComponent } from './ngx-data-table-item/ngx-data-table-item.component';
import { NgxDataTableItemSetComponent } from './ngx-data-table-item-set/ngx-data-table-item-set.component';
import { ngxDataTableTemplateComponents } from './ngx-data-table-item-templates/index';
// export
export * from './ngx-data-table-card/ngx-data-table-card.component';
export * from './ngx-data-table-card-body/ngx-data-table-card-body.component';
export * from './ngx-data-table-card-set/ngx-data-table-card-set.component';
export * from './ngx-data-table-card-header/ngx-data-table-card-header.component';
export * from './ngx-data-table-card/ngx-data-table-card.component';
export * from './ngx-data-table-card-footer/ngx-data-table-card-footer.component';
export * from './ngx-data-table-item-templates/index';
export * from './ngx-data-table-item/ngx-data-table-item.component';
export * from './ngx-data-table-item-set/ngx-data-table-item-set.component';
// export group
export const components: any[] = [
  NgxDataTableCardComponent,
  NgxDataTableCardBodyComponent,
  NgxDataTableCardSetComponent,
  NgxDataTableCardHeaderComponent,
  NgxDataTableCardFooterComponent,
  NgxDataTableComponent,
  NgxDataTableItemComponent,
  NgxDataTableItemSetComponent,
  ...ngxDataTableTemplateComponents,
];
