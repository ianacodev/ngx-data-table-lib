// vendor
import { Component, Input } from '@angular/core';
// models
import { NgxDataTableCardSet } from '../../models';

@Component({
  selector: 'ngx-data-table-card-set',
  styleUrls: ['./ngx-data-table-card-set.component.scss'],
  templateUrl: './ngx-data-table-card-set.component.html',
})
export class NgxDataTableCardSetComponent {
  @Input() ngxDataTableCardSet: NgxDataTableCardSet;
}
