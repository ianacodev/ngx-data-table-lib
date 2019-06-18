// models
import * as fromNgxDataTableModels from '../models';

//--[data items]--------------------------------//

// button
export const buttonDataItem: fromNgxDataTableModels.ButtonItem = {
  id: '0',
  itemType: fromNgxDataTableModels.ItemTypes.Button,
  itemName: 'test button',
  itemLabel: 'test button',
  itemValue: null,
  classes: ['btn'],
  styles: ['background-color: blue', 'color: white'],
};

// display
export const displayDataItem: fromNgxDataTableModels.DisplayItem = {
  id: '1',
  itemType: fromNgxDataTableModels.ItemTypes.Display,
  itemName: 'test display',
  itemLabel: 'test display',
  itemValue: 'test value',
};

// icon
export const iconDataItem: fromNgxDataTableModels.IconItem = {
  id: '2',
  itemType: fromNgxDataTableModels.ItemTypes.Icon,
  itemName: 'test icon',
  itemLabel: 'test icon',
  itemValue: null,
  height: 30,
  width: 30,
  src:
    'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png',
};

// link
export const linkDataItem: fromNgxDataTableModels.LinkItem = {
  id: '3',
  itemType: fromNgxDataTableModels.ItemTypes.Link,
  itemName: 'test link',
  itemLabel: 'test link',
  itemValue: null,
  href: 'https://www.google.com/',
  target: '_blank',
};

// cards
export const ngxDataTableCard: fromNgxDataTableModels.NgxDataTableCard = {
  header: {
    label: 'test label',
    subLabel: 'test sub label',
  },
  body: {
    panelA: {
      [iconDataItem.itemName]: iconDataItem,
    },
    panelB: {
      [displayDataItem.itemName]: displayDataItem,
    },
    panelC: {
      [buttonDataItem.itemName]: buttonDataItem,
    },
  },
  footer: {
    dataItemMap: {
      [linkDataItem.itemName]: linkDataItem,
    },
  },
};

export const dataTable: fromNgxDataTableModels.NgxDataTable = {
  cards: [ngxDataTableCard],
};
