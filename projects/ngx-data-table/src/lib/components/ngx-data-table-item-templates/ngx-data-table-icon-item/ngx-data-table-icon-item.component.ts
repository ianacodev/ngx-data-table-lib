// vendor
import { Component, Input, OnInit } from '@angular/core';
// components
import { NgxDataTableBaseItemComponent } from '../ngx-data-table-base-item/ngx-data-table-base-item.component';
// models
import { IconTypes, NgxDataTableIconItem } from '../../../models';

@Component({
  selector: 'ngx-data-table-icon-item',
  styleUrls: ['./ngx-data-table-icon-item.component.scss'],
  templateUrl: './ngx-data-table-icon-item.component.html',
})
export class NgxDataTableIconItemComponent extends NgxDataTableBaseItemComponent
  implements OnInit {
  iconTypes: any;
  styleObjExp: Object;

  constructor() {
    super();
    this.iconTypes = IconTypes;
  }

  ngOnInit() {
    const tempItem: NgxDataTableIconItem = this
      .ngxDataTableItem as NgxDataTableIconItem;
    this.styleObjExp = {
      height: `${tempItem.height}`,
      width: `${tempItem.width}px`,
      'background-color': tempItem.itemValue,
    };
  }
}
