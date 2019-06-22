// vendor
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// components
import * as fromNgxDataFormComponents from './components';

@NgModule({
  declarations: [...fromNgxDataFormComponents.components],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [...fromNgxDataFormComponents.components],
})
export class NgxDataFormModule {}
