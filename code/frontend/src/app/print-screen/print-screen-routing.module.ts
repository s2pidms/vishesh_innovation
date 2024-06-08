import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: "po_print",
        loadChildren: () => import("./poprint-screen/poprint-screen.module").then(m => m.POPrintScreenModule)
    },
    {
        path: "spo",
        loadChildren: () => import("./spoprint-screen/spoprint-screen.module").then(m => m.SPOPrintScreenModule)
    },
    {
        path: "grn",
        loadChildren: () => import("./grnprint/grnprint.module").then(m => m.GrnprintModule)
    },
    {
        path: "mrn",
        loadChildren: () => import("./mrnprint/mrnprint.module").then(m => m.MrnprintModule)
    },
    {
        path: "grade_structure",
        loadChildren: () =>
            import("./employeeprint-grade-structure/employeeprint-grade-structure.module").then(
                m => m.EmployeePrintGradeStructureModule
            )
    },
    {
        path: "tax_invoice",
        loadChildren: () =>
            import("./tax-invoice-print-screen/tax-invoice-print-screen.module").then(
                m => m.TaxInvoicePrintScreenModule
            )
    },
    {
        path: "preview_tax_invoice",
        loadChildren: () =>
            import("./preview-tax-invoice-print-screen/preview-tax-invoice-print-screen.module").then(
                m => m.PreviewTaxInvoicePrintScreenModule
            )
    },
    {
        path: "pi_print",
        loadChildren: () =>
            import("./proforma-invoice-print-screen/proforma-invoice-print-screen.module").then(
                m => m.ProformaInvoicePrintScreenModule
            )
    },
    {
        path: "debit_note",
        loadChildren: () =>
            import("./debit-note-print-screen/debit-note-print-screen.module").then(m => m.DebitNotePrintScreenModule)
    },
    {
        path: "so_confirmation",
        loadChildren: () =>
            import("./so-comfirmation-print-screen/so-comfirmation-print-screen.module").then(
                m => m.SoComfirmationPrintScreenModule
            )
    },
    {
        path: "credit_note",
        loadChildren: () =>
            import("./credit-note-print-screen/credit-note-print-screen.module").then(
                m => m.CreditNotePrintScreenModule
            )
    },
    {
        path: "gin",
        loadChildren: () => import("./ginprint-screen/ginprint-screen.module").then(m => m.GINPrintScreenModule)
    },
    {
        path: "asn",
        loadChildren: () => import("./asnprint-screen/asnprint-screen.module").then(m => m.ASNPrintScreenModule)
    },
    {
        path: "asn_box_label",
        loadChildren: () =>
            import("./asnbox-label-print-screen/asnbox-label-print-screen.module").then(
                m => m.ASNBoxLabelPrintScreenModule
            )
    },
    {
        path: "pdir",
        loadChildren: () => import("./pdir-print-screen/pdir-print-screen.module").then(m => m.PDIRPrintScreenModule)
    },
    {
        path: "service_invoice",
        loadChildren: () =>
            import("./service-invoice-print-screen/service-invoice-print-screen.module").then(
                m => m.ServiceInvoicePrintScreenModule
            )
    },
    {
        path: "ticket_details",
        loadChildren: () =>
            import("./ticket-details-print-screen/ticket-details-print-screen.module").then(
                m => m.TicketDetailsPrintScreenModule
            )
    },
    {
        path: "tgy_pdir_entry",
        loadChildren: () =>
            import("./PDIR-Templates/tgy-pdir-entry/tgy-pdir-entry.module").then(m => m.TGYPDIREntryModule)
    },
    {
        path: "pdir_entry",
        loadChildren: () =>
            import("./PDIR-Templates/idms-pdir-entry/idms-pdir-entry.module").then(m => m.IDMSPDIREntryModule)
    },
    {
        path: "cost_estimate_cal_print",
        loadChildren: () =>
            import("./cost-estimate-calculator-print/cost-estimate-calculator-print.module").then(
                m => m.CostEstimateCalculatorPrintModule
            )
    },
    {
        path: "mom_print",
        loadChildren: () =>
            import("./minutes-of-meeting-print/minutes-of-meeting-print.module").then(
                m => m.MinutesOfMeetingPrintModule
            )
    },
    {
        path: "rmi_print",
        loadChildren: () => import("./rmi-print-screen/rmi-print-screen.module").then(m => m.RmiPrintScreenModule)
    },
    {
        path: "sale_debit_note",
        loadChildren: () =>
            import("./sale-debit-note-print/sale-debit-note-print.module").then(m => m.SaleDebitNotePrintModule)
    },
    {
        path: "sku_cost_sheet",
        loadChildren: () =>
            import("./sku-cost-sheet-print-screen/sku-cost-sheet-print-screen.module").then(
                m => m.SKUCostSheetPrintScreenModule
            )
    },
    {
        path: "dsku_cost_sheet",
        loadChildren: () =>
            import("./dsku-cost-sheet-print-screen/dsku-cost-sheet-print-screen.module").then(
                m => m.DskuCostSheetPrintScreenModule
            )
    },
    {
        path: "quotation_of_sku",
        loadChildren: () =>
            import("./quotations/quotation-of-skuprint-screen/quotation-of-skuprint-screen.module").then(
                m => m.QuotationOfSKUPrintScreenModule
            )
    },
    {
        path: "job_card_print",
        loadChildren: () => import("./job-card-print/job-card-print.module").then(m => m.JobCardPrintModule)
    },
    {
        path: "npd_review",
        loadChildren: () =>
            import("./npd-review-print-screen/npd-review-print-screen.module").then(m => m.NPDReviewPrintScreenModule)
    },
    {
        path: "npd_request_print",
        loadChildren: () =>
            import("./npd-request-print-screen/npd-request-print-screen.module").then(
                m => m.NPDRequestPrintScreenModule
            )
    },
    {
        path: "npd_review_feasibility_print_screen",
        loadChildren: () =>
            import("./npd-review-feasibility-print-screen/npd-review-feasibility-print-screen.module").then(
                m => m.NPDReviewFeasibilityPrintScreenModule
            )
    },
    {
        path: "purchase_indent_print_screen",
        loadChildren: () =>
            import("./purchase-indent-print-screen/purchase-indent-print-screen.module").then(
                m => m.PurchaseIndentPrintScreenModule
            )
    },
    {
        path: "sample_jc_creation_print",
        loadChildren: () =>
            import("./sample-jc-creation-print/sample-jc-creation-print.module").then(
                m => m.SampleJcCreationPrintModule
            )
    },
    {
        path: "job_work_challan_print",
        loadChildren: () =>
            import("./job-worker-challan-print-screen/job-worker-challan-print-screen.module").then(
                m => m.JobWorkChallanPrintScreenModule
            )
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class PrintScreenRoutingModule {}
