// vendor
import { Component, Input } from '@angular/core';
// models
import { NgxDataTableCardBody, NgxDataTableItemSet } from '../../models';

@Component({
  selector: 'ngx-data-table-card-body',
  styleUrls: ['./ngx-data-table-card-body.component.scss'],
  templateUrl: './ngx-data-table-card-body.component.html',
})
export class NgxDataTableCardBodyComponent {
  ngxDataTableItemSets: NgxDataTableItemSet[];
  @Input() set ngxDataTableCardBody(
    ngxDataTableCardBody: NgxDataTableCardBody,
  ) {
    this.ngxDataTableItemSets = Object.values(ngxDataTableCardBody);
  }
}
