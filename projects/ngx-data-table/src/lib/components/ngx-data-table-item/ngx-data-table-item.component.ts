// vendor
import {
  AfterContentInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
// components
import * as fromNgxDataTableItemTemplates from '../ngx-data-table-item-templates';
// models
import { NgxDataTableItem } from '../../models';

@Component({
  selector: 'ngx-data-table-item',
  styleUrls: ['./ngx-data-table-item.component.scss'],
  templateUrl: './ngx-data-table-item.component.html',
})
export class NgxDataTableItemComponent implements AfterContentInit {
  @Input() ngxDataTableItem: NgxDataTableItem;
  @ViewChild('ngxDataTableItemContainer', {
    read: ViewContainerRef,
    static: true,
  })
  private ngxDataTableItemContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const ngxDataTableItemComponentObj: any =
      fromNgxDataTableItemTemplates.ngxDataTableItemComponentMap[
        this.ngxDataTableItem.itemType
      ];
    const ngxDataTableItemComponentFactory: ComponentFactory<
      any
    > = this.resolver.resolveComponentFactory(ngxDataTableItemComponentObj);
    const ngxDataTableItemComponent: any = this.ngxDataTableItemContainer.createComponent(
      ngxDataTableItemComponentFactory,
    );
    (ngxDataTableItemComponent.instance as fromNgxDataTableItemTemplates.NgxDataTableBaseItemComponent).ngxDataTableItem = this.ngxDataTableItem;
  }
}
