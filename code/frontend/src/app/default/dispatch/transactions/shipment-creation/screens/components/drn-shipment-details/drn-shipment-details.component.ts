import {
  Component,
  OnInit,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from '@directives/sortable.directive';

@Component({
  selector: 'app-drn-shipment-details',
  templateUrl: './drn-shipment-details.component.html',
  styleUrls: ['./drn-shipment-details.component.scss'],
})
export class DrnShipmentDetailsComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers:
    | QueryList<NgbdSortableHeader>
    | any;

  @Input() otherCharges: any = {};
  @Input() action: string = 'edit';
  @Input() shipmentLineValue: any = 0;
  @Input() SPTotalAmount: any = 0;

  // packingList
  @Input() packingList: any = '';

  page: number = 1;
  pageSize: number = 8;
  collection: number = 0;
  search: string = '';
  column: string = 'createdAt';
  direction: number = -1;
  active: any = 1;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  saveData(value: any) {
    if (value.key == 'otherCharges') {
      this.otherCharges = value.data;
      this.active = this.active + 1;
    }
    if (value.key == 'packingList') {
      this.packingList = value.data;
      this.dismissModel()
    }
  }
  dismissModel() {
    let obj: any = {};
    obj.otherCharges = this.otherCharges;
    obj.packingList = this.packingList;
    this.activeModal.close(obj);
  }
}
