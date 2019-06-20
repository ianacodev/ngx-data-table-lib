// vendor
import { Component, Input } from '@angular/core';
// models
import { NgxDataTableItem } from '../../../models';

@Component({
  selector: 'ngx-data-table-base-item',
  styleUrls: ['./ngx-data-table-base-item.component.scss'],
  templateUrl: './ngx-data-table-base-item.component.html',
})
export class NgxDataTableBaseItemComponent {
  @Input() ngxDataTableItem: NgxDataTableItem;
}
