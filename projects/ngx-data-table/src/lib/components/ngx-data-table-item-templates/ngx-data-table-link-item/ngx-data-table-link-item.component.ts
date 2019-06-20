// vendor
import { Component, Input } from '@angular/core';
// components
import { NgxDataTableBaseItemComponent } from '../ngx-data-table-base-item/ngx-data-table-base-item.component';
// models
import { LinkTypes } from '../../../models';

@Component({
  selector: 'ngx-data-table-link-item',
  styleUrls: ['./ngx-data-table-link-item.component.scss'],
  templateUrl: './ngx-data-table-link-item.component.html',
})
export class NgxDataTableLinkItemComponent extends NgxDataTableBaseItemComponent {
  linkTypes: any;

  constructor() {
    super();
    this.linkTypes = LinkTypes;
  }
}
