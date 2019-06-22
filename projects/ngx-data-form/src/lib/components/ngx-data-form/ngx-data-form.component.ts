// vendor
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// models
import { PropertyKey } from '../../models';
// mocks
import * as fromNgxDataFormTestMocks from '../../test/mocks';

@Component({
  selector: 'ngx-data-form',
  styleUrls: ['./ngx-data-form.component.scss'],
  templateUrl: './ngx-data-form.component.html',
})
export class NgxDataFormComponent implements OnInit {
  ngxDataForm: FormGroup;
  ngxDataTableHeaderLabelOptions: PropertyKey[];
  ngxDataFormSubmittedStatus: boolean;
  @Output() submitNgxDataForm: EventEmitter<FormGroup>;

  constructor(private fb: FormBuilder) {
    this.submitNgxDataForm = new EventEmitter();
  }

  ngOnInit() {
    this.ngxDataTableHeaderLabelOptions =
      fromNgxDataFormTestMocks.driverPropertyKeys;
    this.ngxDataForm = this.buildNgxDataForm();
  }

  /**
   * Build ngx data form.
   * @params ngxDataForm
   * @returns dgx data form group
   */
  buildNgxDataForm(ngxDataForm?: FormGroup): FormGroup {
    return this.fb.group({
      labelKey: ['', [Validators.required]],
      subLabelKey: [''],
      classExp: [''],
      styleExp: [''],
    });
  }

  /**
   * Build ngx data header form.
   * @returns ngx data header form group
   */
  buildNgxDataHeaderForm(): FormGroup {
    return this.fb.group({
      labelKey: ['', [Validators.required]],
      subLabelKey: [''],
      classExp: [''],
      styleExp: [''],
    });
  }

  /**
   * On submit ngx data form.
   * @param ngxDataForm
   */
  onSubmitNgxDataForm(ngxDataForm: FormGroup): void {
    console.log('form value', ngxDataForm.value);
    this.submitNgxDataForm.emit(ngxDataForm.value);
  }
}
