// models
import * as fromNgxDataTableModels from '../../models';

// driver card config
export const driverCardConfig: any = {
  header: {
    labelKey: ['firstName'],
    subLabelKey: ['lastName'],
  },
  body: {
    panelA: [
      {
        id: '1',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Icon,
        itemName: 'color-icon',
        itemLabel: 'color icon',
        itemKey: ['colorHexCode'],
        classes: [],
        styles: [],
        iconType: fromNgxDataTableModels.IconTypes.image,
        height: 25,
        width: 25,
        src:
          'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png',
      },
    ],
    panelB: [
      {
        id: '2',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Display,
        itemName: 'phoneNumber',
        itemLabel: 'Phone number',
        itemKey: ['phoneNumber'],
        classes: [],
        styles: [],
      },
      {
        id: '3',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Display,
        itemName: 'startTime',
        itemLabel: 'Start time',
        itemKey: ['startTime'],
        classes: [],
        styles: [],
      },
      {
        id: '4',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Display,
        itemName: 'endTime',
        itemLabel: 'End time',
        itemKey: ['endTime'],
        classes: [],
        styles: [],
      },
    ],
    panelC: [
      {
        id: '5',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Button,
        itemName: 'route-btn',
        itemLabel: 'route',
        itemKey: [],
        actionType: 'route',
      },
    ],
  },
  footer: {
    dataTableItemSet: [
      {
        id: '5',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Display,
        itemName: 'active',
        itemLabel: 'Active status',
        itemKey: ['active'],
      },
    ],
  },
};
