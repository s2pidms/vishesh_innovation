import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ICostSheetList} from "@mocks/models/sales/master";

@Component({
    selector: "app-sku-attributes",
    templateUrl: "./sku-attributes.component.html",
    styleUrls: ["./sku-attributes.component.scss"]
})
export class SkuAttributesComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() companyType: any = "";
    @Input() shoulderTypeOptions: any = [];
    @Input() mouldData: any = [];

    // Dimensions
    @Input() SKUAttributes: any = [];
    @Input() dimensionsDetails: any = {};
    @Input() action: string = "edit";
    // Color Info
    @Input() totalNoOfColors: any = null;
    @Input() inkDetailsArr: any = [];

    // Material Info
    @Input() materialSKUUnit: any = null;
    @Input() layoutDimensionsUps: any = null;
    @Input() actualDimensionsArea: any = null;
    @Input() materialInfoArr: any = [];

    // Specification
    // @Input() SKUSpecificationArr: any = [];
    // drawingArtWork
    @Input() drawingArtWork: any = {};
    // genSpecs
    // @Input() genSpecs: any = {};
    // storage
    @Input() storage: any = {};
    // storage
    // @Input() costSheetArr: ICostSheetList[] = [];
    @Input() bomDimData: any = {};
    @Input() offTakeData: any = {};
    @Input() primaryUnit: any = "";

    // toolInfo
    @Input() toolInfo: any = {};

    // specsAttribute
    @Input() specsAttribute: any = {};

    // mouldsIDAttribute
    @Input() mouldsIDAttribute: any = {};

    // packingStdAttribute
    @Input() packingStdAttribute: any = {};

    isPreview = false;
    resetData: any = [];
    ESCPreviewArr: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    isESCPreview = false;
    attributes: any = "dimensions";
    active: any = 1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        // this.costSheetArr = this.costSheetArr.map((x: any) => {
        //     x.SKUUnit = this.primaryUnit ?? null;
        //     return x;
        // });

        if (this.dimensionsDetails) {
            this.layoutDimensionsUps = this.dimensionsDetails?.layoutDimensions?.ups;
            this.materialInfoArr = this.materialInfoArr?.map((x: any) => {
                x.ups = this.layoutDimensionsUps;
                return x;
            });
        }
    }

    saveData(value: any) {
        if (value.key == "inkDetailsArr") {
            this.inkDetailsArr = value.data.inkDetailsArr;
            this.totalNoOfColors = value.data.totalNoOfColors;
        }
        if (value.key == "materialInfoArr") {
            this.materialInfoArr = value.data;
        }
        if (value.key == "drawingArtWork") {
            this.drawingArtWork = value.data;
        }
        // if (value.key == "genSpecs") {
        //     this.genSpecs = value.data;
        // }
        if (value.key == "storage") {
            this.storage = value.data;
        }
        // if (value.key == "SKUSpecificationArr") {
        //     this.SKUSpecificationArr = value.data;
        // }
        // if (value.key == "costSheetArr") {
        //     this.costSheetArr = value.data;
        // }
        if (value.key == "bomDimData") {
            this.bomDimData = value.data;
        }
        if (value.key == "offTakeData") {
            this.offTakeData = value.data;
        }
        if (value.key == "dimensionsDetails") {
            this.dimensionsDetails = value.data;
            this.materialSKUUnit = value?.data?.layoutDimensions?.mSqArea;
        }
        if (value.key == "toolInfo") {
            this.toolInfo = value.data;
        }
        if (value.key == "specsAttribute") {
            this.specsAttribute = value.data;
        }
        if (value.key == "mouldsIDAttribute") {
            this.mouldsIDAttribute = value.data;
        }
        if (value.key == "packingStdAttribute") {
            this.packingStdAttribute = value.data;
        }
        this.active = this.SKUAttributes.length < this.active + 1 ? 1 : this.active + 1;
    }
    dismissModel() {
        let obj: any = {};
        // obj.genSpecs = this.genSpecs;
        obj.storage = this.storage;
        obj.inkDetailsArr = this.inkDetailsArr;                        
        obj.totalNoOfColors = this.totalNoOfColors;                        
        obj.materialInfoArr = this.materialInfoArr;                        
        obj.dimensionsDetails = this.dimensionsDetails;                        
        // obj.SKUSpecificationArr = this.SKUSpecificationArr;
        // obj.costSheetArr = this.costSheetArr;
        obj.bomDimData = this.bomDimData;                        
        obj.offTakeData = this.offTakeData;                        
        obj.drawingArtWork = this.drawingArtWork;                        
        obj.toolInfo = this.toolInfo;                        
        obj.specsAttribute = this.specsAttribute;
        obj.mouldsIDAttribute = this.mouldsIDAttribute;                        
        obj.packingStdAttribute = this.packingStdAttribute;                        
        this.activeModal.close(obj);
    }
}
