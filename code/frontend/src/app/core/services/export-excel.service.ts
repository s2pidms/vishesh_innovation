import { Injectable } from '@angular/core'; 
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { AppGlobalService } from './app-global.service';
import { LabelTranslatePipe } from 'src/app/shared/pipes';
import { SpinnerService } from './spinner.service';
@Injectable({
  providedIn: 'root',
})
export class ExportExcelService {
  fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

  fileExtension = '.xlsx';
  constructor(
    private spinner: SpinnerService,
    private appGlobalService: AppGlobalService
  ) {}
  labelsTranslate: any = new LabelTranslatePipe(this.appGlobalService);
  exportExcel({ csvData = [], title = 'excel', headers = [] }) {
    //Create a workbook with a worksheet
    let workbook = new Workbook();
    workbook.created = new Date();
    workbook.modified = new Date();
    let worksheet = workbook.addWorksheet('IDMS Data');
    // worksheet.getRow(1).fill = {
    //   type: 'pattern',
    //   pattern: 'solid',
    //   fgColor: { argb: 'FFC0C0C0' },
    // };
    //Adding Header Row
    worksheet.getRow(1).font = {
      bold: true,
    };
    const transformHeaders = headers.map((x: any) => {
      x.header = this.labelsTranslate.transform(x.header);
      return x;
    });
    worksheet.columns = transformHeaders;
    worksheet.addRows(csvData);
    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], {
        type: this.fileType,
      });
      fs.saveAs(blob, title + '.xlsx');
    });
    this.spinner.hide();
  }
}
