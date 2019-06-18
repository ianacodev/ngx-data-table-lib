// models
import { DataItemMap } from './item.model';

// card header
export interface NgxDataTableCardHeader {
  label: string;
  subLabel: string;
}

// card body
export interface NgxDataTableCardBody {
  panelA: DataItemMap;
  panelB: DataItemMap;
  panelC: DataItemMap;
}

// card footer
export interface NgxDataTableCardFooter {
  dataItemMap: DataItemMap;
}

// card
export interface NgxDataTableCard {
  header: NgxDataTableCardHeader;
  body: NgxDataTableCardBody;
  footer: NgxDataTableCardFooter;
  data?: any;
}
