// vendor
import { Component, Input } from '@angular/core';
// models
import { NgxDataTableCard } from '../../models';

@Component({
  selector: 'ngx-data-table-card',
  styleUrls: ['./ngx-data-table-card.component.scss'],
  templateUrl: './ngx-data-table-card.component.html',
})
export class NgxDataTableCardComponent {
  @Input() ngxDataTableCard: NgxDataTableCard;
}
