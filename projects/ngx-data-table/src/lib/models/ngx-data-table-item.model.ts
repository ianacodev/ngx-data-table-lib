// data table item types
export enum NgxDataTableItemTypes {
  Button = 'button',
  Display = 'display',
  Icon = 'icon',
  Link = 'link',
}

//--[data table item base]----------------//

// data table item config
export interface NgxDataTableBaseItemConfig {
  id: string;
  itemType: NgxDataTableItemTypes;
  itemName: string;
  itemLabel: string;
  itemKey: string[];
  classes: string[];
  styles: string[];
}

// data table item
export interface NgxDataTableBaseItem {
  id: string;
  itemType: NgxDataTableItemTypes;
  itemName: string;
  itemLabel: string;
  itemValue: any;
  classes: string[];
  styles: string[];
}

//--[button item]---------------------------//

// button item config
export interface NgxDataTableButtonItemConfig
  extends NgxDataTableBaseItemConfig {}

// button item
export interface NgxDataTableButtonItem extends NgxDataTableBaseItem {}

//--[display item]---------------------------//

// display item config
export interface NgxDataTableDisplayItemConfig
  extends NgxDataTableBaseItemConfig {}

// display item
export interface NgxDataTableDisplayItem extends NgxDataTableBaseItem {}

//--[icon item]---------------------------//

// icon item config
export interface NgxDataTableIconItemConfig extends NgxDataTableBaseItemConfig {
  height: number;
  width: number;
  src: string;
}

// icon item
export interface NgxDataTableIconItem extends NgxDataTableBaseItem {
  height: number;
  width: number;
  src: string;
}

//--[link item]---------------------------//

// link item config
export interface NgxDataTableLinkItemConfig extends NgxDataTableBaseItemConfig {
  href: string;
  routeUrl: string;
  target: string;
}

// link item
export interface NgxDataTableLinkItem extends NgxDataTableBaseItem {
  href: string;
  routeUrl: string;
  target: string;
}

// data table item config
export type NgxDataTableItemConfig =
  | NgxDataTableButtonItemConfig
  | NgxDataTableDisplayItemConfig
  | NgxDataTableIconItemConfig
  | NgxDataTableLinkItemConfig;

// data table item config set
export type NgxDataTableItemConfigSet = NgxDataTableItemConfig[];

// data table item
export type NgxDataTableItem =
  | NgxDataTableButtonItem
  | NgxDataTableDisplayItem
  | NgxDataTableIconItem
  | NgxDataTableLinkItem;

// data table item set
export type NgxDataTableItemSet = NgxDataTableItem[];
