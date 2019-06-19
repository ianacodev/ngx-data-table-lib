// models
import { NgxDataTableItemSet } from './ngx-data-table-item.model';

// card header
export interface NgxDataTableCardHeader {
  label?: string;
  subLabel?: string;
  labelKey?: string[];
  subLabelKey?: string[];
}

// card body
export interface NgxDataTableCardBody {
  panelA: NgxDataTableItemSet;
  panelB: NgxDataTableItemSet;
  panelC: NgxDataTableItemSet;
}

// card footer
export interface NgxDataTableCardFooter {
  dataTableItemSet: NgxDataTableItemSet;
}

// card
export interface NgxDataTableCard {
  header: NgxDataTableCardHeader;
  body: NgxDataTableCardBody;
  footer: NgxDataTableCardFooter;
  data?: any;
}

// card set
export type NgxDataTableCardSet = NgxDataTableCard[];
