import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@core/services';
@Component({
  selector: 'app-cost-estimate-calculator-print',
  templateUrl: './cost-estimate-calculator-print.component.html',
  styleUrls: ['./cost-estimate-calculator-print.component.scss'],
})
export class CostEstimateCalculatorPrintComponent implements OnInit {
  pdfAction: any = '';
  DSKUList: any = [];
  costSheetArr: any = [];
  SKUName: any = '';
  SKUNo: any = '';
  type: any = '';
  SKUDescription: any = '';
  primaryUnit: any = '';
  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    let data = this.storageService.get('costEstimateCalculateData');
    this.SKUNo = data.SKUNo;
    this.SKUName = data.SKUName;
    this.SKUDescription = data.SKUDescription;
    this.primaryUnit = data.primaryUnit;
    this.costSheetArr = data.costSheetArr;
    this.type = data.type;
  }
  ngOnDestroy(): void {
    this.storageService.remove('costEstimateCalculateData');
  }
  navigateTo(path: string, id: any, action: string) {
    this.router.navigate([path], { queryParams: { id, action } });
  }
  trackByFn(index: number, item: any) {
    return item?._id;
  }
  windowPrint() {
    window.print();
  }
}
