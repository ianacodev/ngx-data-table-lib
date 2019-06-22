// vendor
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-data-form-control-select',
  styleUrls: ['./ngx-data-form-control-select.component.scss'],
  templateUrl: './ngx-data-form-control-select.component.html',
})
export class NgxDataFormControlSelectComponent {
  @Input() parentForm: FormGroup;
  @Input() options: any[];
  @Input() optionKeyDisplay: string;
  @Input() optionKeyValue: string;
  @Input() controlLabel: string;
  @Input() controlName: string;
  @Input() placeholder: string;
  @Input() formSubmittedStatus: boolean;

  constructor() {}
}
