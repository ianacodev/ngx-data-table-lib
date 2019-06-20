// models
import * as fromNgxDataTableModels from '../../models';

// driver card config
export const driverCardConfig: any = {
  header: {
    labelKey: ['firstName'],
    subLabelKey: ['lastName'],
    classExp: {},
    styleExp: {},
  },
  body: {
    panelA: [
      {
        id: '1',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Icon,
        itemName: 'color-icon',
        itemLabel: 'color icon',
        itemKey: ['colorHexCode'],
        classExp: {},
        styleExp: {
          'border-radius': '50%',
          'box-shadow': '1px 1px 8px gray',
          height: '45px',
          width: '45px',
        },
        iconType: fromNgxDataTableModels.IconTypes.custom,
        src:
          'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png',
      },
      {
        id: '2',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Icon,
        itemName: 'color-icon',
        itemLabel: 'color icon',
        itemKey: ['colorHexCode'],
        classExp: {},
        styleExp: {
          'border-radius': '50%',
          'box-shadow': '1px 1px 8px gray',
          height: '45px',
          width: '45px',
        },
        iconType: fromNgxDataTableModels.IconTypes.image,
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
        classExp: {},
        styleExp: {},
        hideLabel: true,
      },
      {
        id: '3',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Display,
        itemName: 'addressStreet',
        itemLabel: 'Street',
        itemKey: ['address', 'street'],
        classExp: {},
        styleExp: {},
        hideLabel: true,
      },
      {
        id: '4',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Display,
        itemName: 'addressCity',
        itemLabel: 'City',
        itemKey: ['address', 'city'],
        classExp: {},
        styleExp: {},
        hideLabel: true,
      },
    ],
    panelC: [
      {
        id: '5',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Button,
        itemName: 'route-btn',
        itemLabel: 'route',
        itemKey: [],
        classExp: {},
        styleExp: {},
        actionType: 'route',
      },
      {
        id: '5',
        itemType: fromNgxDataTableModels.NgxDataTableItemTypes.Link,
        itemName: 'route-btn',
        itemLabel: 'google',
        itemKey: [],
        classExp: {},
        styleExp: {},
        linkType: 'redirect',
        href: 'https://www.google.com',
        target: '_blank',
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
        classExp: {},
        styleExp: {},
        hideLabel: false,
      },
    ],
  },
};
