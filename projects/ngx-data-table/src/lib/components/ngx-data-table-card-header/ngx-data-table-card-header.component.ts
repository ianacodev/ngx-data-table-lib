// vendor
import { Component, Input } from '@angular/core';
// models
import { NgxDataTableCardHeader } from '../../models';

@Component({
  selector: 'ngx-data-table-card-header',
  styleUrls: ['./ngx-data-table-card-header.component.scss'],
  templateUrl: './ngx-data-table-card-header.component.html',
})
export class NgxDataTableCardHeaderComponent {
  @Input() ngxDataTableCardHeader: NgxDataTableCardHeader;
}
