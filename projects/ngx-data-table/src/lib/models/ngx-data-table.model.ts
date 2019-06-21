// imports
import {
  NgxDataTableCard,
  NgxDataTableCardSet,
} from './ngx-data-table-card.model';

// data table
export interface NgxDataTable {
  cardSet: NgxDataTableCardSet;
}

export interface NgxDataTableConfig {
  cardConfig: NgxDataTableCard;
}
export interface TableInput {
  data: any;
  config: NgxDataTableConfig;
}
