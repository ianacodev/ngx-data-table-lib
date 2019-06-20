// vendor
import { Component, EventEmitter, Input, Output } from '@angular/core';
// models
import { NgxDataTableItem } from '../../../models';

@Component({
  selector: 'ngx-data-table-base-item',
  styleUrls: ['./ngx-data-table-base-item.component.scss'],
  templateUrl: './ngx-data-table-base-item.component.html',
})
export class NgxDataTableBaseItemComponent {
  @Input() ngxDataTableItem: NgxDataTableItem;
  @Output() ngxDataTableItemActionClick: EventEmitter<NgxDataTableItem>;

  constructor() {
    this.ngxDataTableItemActionClick = new EventEmitter();
  }

  /**
   * On ngx data table item action click.
   * @param ngxDataTableItem
   */
  onNgxDataTableItemActionClick(ngxDataTableItem: NgxDataTableItem): void {
    this.ngxDataTableItemActionClick.emit(ngxDataTableItem);
  }
}
