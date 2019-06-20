// vendor
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule],
  entryComponents: [...fromComponents.ngxDataTableTemplateComponents],
  exports: [...fromComponents.components],
})
export class NgxDataTableModule {}
