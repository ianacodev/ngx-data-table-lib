import { Component } from '@angular/core';
// mock
import * as fromMocks from 'C:/Users/ianaco70/git/ngx-data-table-lib/projects/ngx-data-table/src/lib/tests/mocks';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tableInput: any;

  /**
   * submitNgxDataForm
   */
  submitNgxDataForm(event: any): void {
    console.log('ngxDataFormSubmit', event);
  }
}
