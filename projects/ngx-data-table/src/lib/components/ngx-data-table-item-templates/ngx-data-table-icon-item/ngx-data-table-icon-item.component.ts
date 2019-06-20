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

  constructor() {
    super();
    this.iconTypes = IconTypes;
  }

  ngOnInit() {
    this.ngxDataTableItem.styleExp = {
      ...this.ngxDataTableItem.styleExp,
      ...{ 'background-color': this.ngxDataTableItem.itemValue },
    };
  }
}
