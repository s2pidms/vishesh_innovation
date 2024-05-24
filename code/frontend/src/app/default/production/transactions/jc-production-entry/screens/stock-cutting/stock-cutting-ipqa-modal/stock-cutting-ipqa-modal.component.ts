import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {UtilityService} from "@core/services";


@Component({
  selector: 'app-stock-cutting-ipqa-modal',
  templateUrl: './stock-cutting-ipqa-modal.component.html',
  styleUrls: ['./stock-cutting-ipqa-modal.component.scss']
})
export class StockCuttingIPQAModalComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
  @Input() action: string = "create";
  @Input() IPQAInfoList: any = {};
  // @Input() shiftOptions: any = [];
  // @Input() IPQADetails: any = {};
  sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;

  constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}
  ngOnInit(): void {
      this.IPQAInfoList.inProcessInfo = this.IPQAInfoList.inProcessInfo.map((x: any) => {
          if (x.date) {
              x.date = this.utilityService.getFormatDate(x.date, "YYYY-MM-DD");
          }
          return x;
      });
  }

  deleteTableRow() {
      if (this.IPQAInfoList?.inProcessInfo?.length > 1) {
          this.IPQAInfoList.inProcessInfo.pop();
      }
  }
  addTableRow() {
      this.IPQAInfoList.inProcessInfo.push({
          date: this.utilityService.getTodayDate("YYYY-MM-DD"),
          inProcessCorrection: "",
          inProcessNonConformance: null
      });
  }

  dismissModel() {
      this.activeModal.close({
          IPQAInfoList: this.IPQAInfoList
      });
  }
}


