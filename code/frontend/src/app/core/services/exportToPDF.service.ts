import {Injectable} from "@angular/core";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import {LabelTranslatePipe} from "src/app/shared/pipes";
import {AppGlobalService} from "./app-global.service";
import {SpinnerService} from "./spinner.service";
import {UtilityService} from "./utility.service";
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
    providedIn: "root"
})
export class ExportToPDFService {
    constructor(
        private spinner: SpinnerService,
        private appGlobalService: AppGlobalService,
        private utilityService: UtilityService
    ) {}
    labelsTranslate: any = new LabelTranslatePipe(this.appGlobalService);

    generatePdf(tableData: any = {}, fileName: string = "tableData", orientation: string = "portrait") {
        const transformText = (text: string) => this.labelsTranslate.transform(text);

        tableData.body = tableData.body.map((row: any, index: number) => {
            if (index === 0) {
                return row.map((cell: any) => {
                    cell.text = transformText(cell.text);
                    return cell;
                });
            }
            return row;
        });
        const documentDefinition: any = {
            pageSize: "A4",
            pageOrientation: orientation,
            content: [
                {
                    text: fileName,
                    // text: fileName + this.utilityService.getCurrentFormattedDateTime(),
                    color: "#007daf",
                    alignment: "center",
                    fontSize: 16,
                    fillColor: "#007daf",
                    margin: [0, 0, 15, 15]
                },
                {fontSize: 5, alignment: "left", table: tableData}
            ],
            styles: {
                header: {
                    color: "#fff",
                    bold: true,
                    fillColor: "#007daf"
                },
                subheader: {
                    bold: false
                },
                quote: {
                    italics: true
                },
                small: {
                    fontSize: 8
                }
            },
            pageMargins: [10, 10]
        };

        pdfMake
            .createPdf(documentDefinition)
            .download(`${fileName + this.utilityService.getCurrentFormattedDateTime()}.pdf`);
        this.spinner.hide();
    }
}
