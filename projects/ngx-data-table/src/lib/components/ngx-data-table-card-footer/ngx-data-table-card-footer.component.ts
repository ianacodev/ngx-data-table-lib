// vendor
import { Component, Input } from '@angular/core';
// models
import { NgxDataTableCardFooter } from '../../models';

@Component({
  selector: 'ngx-data-table-card-footer',
  styleUrls: ['./ngx-data-table-card-footer.component.scss'],
  templateUrl: './ngx-data-table-card-footer.component.html',
})
export class NgxDataTableCardFooterComponent {
  @Input() ngxDataTableCardFooter: NgxDataTableCardFooter;
}
