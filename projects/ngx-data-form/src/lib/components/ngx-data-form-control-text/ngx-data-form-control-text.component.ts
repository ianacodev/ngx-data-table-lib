// vendor
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-data-form-control-text',
  styleUrls: ['./ngx-data-form-control-text.component.scss'],
  templateUrl: './ngx-data-form-control-text.component.html',
})
export class NgxDataFormControlTextComponent {
  @Input() parentForm: FormGroup;
  @Input() controlLabel: string;
  @Input() controlName: string;
  @Input() placeholder: string;
  @Input() formSubmittedStatus: boolean;
  @Input() invertStatus: boolean;
}
