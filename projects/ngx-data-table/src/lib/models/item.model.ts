// item types
export enum ItemTypes {
  Button = 'button',
  Display = 'display',
  Icon = 'icon',
  Link = 'link',
}

// item
export interface Item {
  id: string;
  itemType: ItemTypes;
  itemName: string;
  itemLabel: string;
  itemValue: any;
  classes?: string[];
  styles?: string[];
}

// button item
export interface ButtonItem extends Item {}

// display item
export interface DisplayItem extends Item {}

// icon item
export interface IconItem extends Item {
  height: number;
  width: number;
  src?: string;
}

// link item
export interface LinkItem extends Item {
  href?: string;
  routeUrl?: string;
  target?: string;
}

// data item
export type DataItem = ButtonItem | DisplayItem | IconItem | LinkItem;

// data item map
export interface DataItemMap {
  [id: string]: DataItem;
}
