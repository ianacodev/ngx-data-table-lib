// models
import * as fromNgxDataTableModels from '../../models';

export const driverCardConfig: any = {
  header: {
    labelKey: ['firstName'],
    subLabelKey: ['lastName'],
  },
  body: {
    panelA: [
      {
        id: '1',
        itemType: fromNgxDataTableModels.ItemTypes.Icon,
        itemName: 'colorIcon',
        itemLabel: 'Color icon',
        itemKey: ['colorHexCode'],
      },
    ],
    panelB: [
      {
        id: '2',
        itemType: fromNgxDataTableModels.ItemTypes.Display,
        itemName: 'phoneNumber',
        itemLabel: 'Phone number',
        itemKey: ['phoneNumber'],
      },
      {
        id: '3',
        itemType: fromNgxDataTableModels.ItemTypes.Display,
        itemName: 'startTime',
        itemLabel: 'Start time',
        itemKey: ['startTime'],
      },
      {
        id: '4',
        itemType: fromNgxDataTableModels.ItemTypes.Display,
        itemName: 'endTime',
        itemLabel: 'End time',
        itemKey: ['endTime'],
      },
    ],
    panelC: [
      {
        id: '5',
        itemType: fromNgxDataTableModels.ItemTypes.Display,
        itemName: 'vehicleCapacity',
        itemLabel: 'Vehicle capacity',
        itemKey: ['vehicle', 'vehicleCapacity'],
      },
    ],
  },
  footer: [
    {
      id: '5',
      itemType: fromNgxDataTableModels.ItemTypes.Display,
      itemName: 'active',
      itemLabel: 'Active status',
      itemKey: ['active'],
    },
  ],
};
