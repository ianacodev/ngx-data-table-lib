// data table item types
export enum NgxDataTableItemTypes {
  Button = 'button',
  Display = 'display',
  Icon = 'icon',
  Link = 'link',
}

// link types
export enum LinkTypes {
  Route = 'route',
  Redirect = 'redirect',
}

// icon types
export enum IconTypes {
  custom = 'custom',
  image = 'image',
}

// data table item
export interface NgxDataTableBaseItem {
  id: string;
  itemType: NgxDataTableItemTypes;
  itemName: string;
  itemLabel: string;
  itemKey: string[];
  itemValue?: any;
  classExp: Object;
  styleExp: Object;
}

// button item
export interface NgxDataTableButtonItem extends NgxDataTableBaseItem {
  actionType: string;
}

// display item
export interface NgxDataTableDisplayItem extends NgxDataTableBaseItem {
  hideLabel: boolean;
}

// icon item
export interface NgxDataTableIconItem extends NgxDataTableBaseItem {
  iconType: IconTypes;
  height: number;
  width: number;
  src: string;
}

// link item
export interface NgxDataTableLinkItem extends NgxDataTableBaseItem {
  linkType: LinkTypes;
  href: string;
  routeUrl: string;
  target: string;
}

// data table item
export type NgxDataTableItem =
  | NgxDataTableButtonItem
  | NgxDataTableDisplayItem
  | NgxDataTableIconItem
  | NgxDataTableLinkItem;

// data table item set
export type NgxDataTableItemSet = NgxDataTableItem[];
