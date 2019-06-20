// models
import { NgxDataTableItemSet } from './ngx-data-table-item.model';

// card header
export interface NgxDataTableCardHeader {
  label?: string;
  subLabel?: string;
  labelKey?: string[];
  subLabelKey?: string[];
  classExp: Object;
  styleExp: Object;
}

// card body content
export interface NgxDataTableCardBodyContent {
  panelA: NgxDataTableItemSet;
  panelB: NgxDataTableItemSet;
  panelC: NgxDataTableItemSet;
}

// card body
export interface NgxDataTableCardBody {
  content: NgxDataTableCardBodyContent;
  classExp: Object;
  styleExp: Object;
}

// card footer
export interface NgxDataTableCardFooter {
  dataTableItemSet: NgxDataTableItemSet;
  classExp: Object;
  styleExp: Object;
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
