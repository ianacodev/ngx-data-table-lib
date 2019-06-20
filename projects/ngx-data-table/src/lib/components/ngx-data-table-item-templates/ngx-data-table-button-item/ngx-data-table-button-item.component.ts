// vendor
import { Component, EventEmitter, Output } from '@angular/core';
// components
import { NgxDataTableBaseItemComponent } from '../ngx-data-table-base-item/ngx-data-table-base-item.component';
// models
import { NgxDataTableItem } from '../../../models';

@Component({
  selector: 'ngx-data-table-button-item',
  styleUrls: ['./ngx-data-table-button-item.component.scss'],
  templateUrl: './ngx-data-table-button-item.component.html',
})
export class NgxDataTableButtonItemComponent extends NgxDataTableBaseItemComponent {}
