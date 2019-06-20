// vendor
import { Component, Input } from '@angular/core';
// models
import { NgxDataTableItemSet } from '../../models';

@Component({
  selector: 'ngx-data-table-item-set',
  styleUrls: ['./ngx-data-table-item-set.component.scss'],
  templateUrl: './ngx-data-table-item-set.component.html',
})
export class NgxDataTableItemSetComponent {
  @Input() ngxDataTableItemSet: NgxDataTableItemSet;
}
