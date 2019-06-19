// models
import {
  NgxDataTableItemConfigSet,
  NgxDataTableItemSet,
} from './ngx-data-table-item.model';

//--[card header]------------------------------//

// card header config
export interface NgxDataTableCardHeaderConfig {
  labelKey: [''];
  subLabelKey: [''];
}

// card header
export interface NgxDataTableCardHeader {
  label: string;
  subLabel: string;
}

//--[card body]-------------------------------//

// card body config
export interface NgxDataTableCardBodyConfig {
  panelA: NgxDataTableItemConfigSet;
  panelB: NgxDataTableItemConfigSet;
  panelC: NgxDataTableItemConfigSet;
}

// card body
export interface NgxDataTableCardBody {
  panelA: NgxDataTableItemSet;
  panelB: NgxDataTableItemSet;
  panelC: NgxDataTableItemSet;
}

//--[card footer]------------------------------//

// card footer config
export interface NgxDataTableCardFooterConfig {
  dataTableItemConfigSet: NgxDataTableItemConfigSet;
}

// card footer
export interface NgxDataTableCardFooter {
  dataTableItemSet: NgxDataTableItemSet;
}

//--[card]-----------------------------------//

// card config
export interface NgxDataTableCardConfig {
  header: NgxDataTableCardHeaderConfig;
  body: NgxDataTableCardBodyConfig;
  footer: NgxDataTableCardFooterConfig;
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
