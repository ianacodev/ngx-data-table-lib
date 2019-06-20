// vendor
import { Component, Input } from '@angular/core';
// models
import { NgxDataTableItem } from '../../models';

@Component({
  selector: 'ngx-data-table-item',
  styleUrls: ['./ngx-data-table-item.component.scss'],
  templateUrl: './ngx-data-table-item.component.html',
})
export class NgxDataTableItemComponent {
  @Input() ngxDataTableItem: NgxDataTableItem;
}
