import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgSelectModule} from "@ng-select/ng-select";

import {
    AlertComponent,
    CustomMenuHeaderComponent,
    ValidationMessagesComponent,
    CustomTableComponent,
    SettingHeaderComponent,
    FileUploadComponent,
    TabCardComponent
} from "../core/components";

import {
    NgbdSortableHeader,
    TwoDigitDecimalNumberDirective,
    AccessControlDirective,
    EllipsisDirective,
    HighlightSearchDirective,
    TimeAgoDirective,
    CopyToClipboardDirective,
    LazyLoadImageDirective
} from "./directives";

import {
    SearchFilterPipe,
    TruncatePipe,
    ToWordsPipe,
    LabelTranslatePipe,
    CompanyCurrencyPipe,
    UOMUnitsMasterPipe,
    SalesUOMUnitsMasterPipe,
    JCEDisabledProdInfoPipe,
    JCEDisabledIPQAInfoPipe
} from "./pipes";

import {
    AddAddressComponent,
    ContactDetailsComponent,
    POOtherChargesComponent,
    ViewAddressComponent,
    iBASModalComponent,
    AddItemSuppliersComponent,
    AddItemUOMComponent,
    SalesDispatchDetailsComponent,
    AddMultipleCustomerSkuComponent,
    PopUpNotesComponent,
    CancelPoComponent,
    BOMCompositionComponent,
    DetailsOfSupplierListComponent,
    DetailsOfCustomersListComponent,
    CustomSearchDetailsModalComponent,
    DetailsOfChannelPartnerComponent,
    AddItemChannelPartnerComponent
} from "./modals";

import {CancelSoLineDetailsComponent} from "./modals/cancel-so-line-details/cancel-so-line-details.component";
import {QRCodeModule} from "angularx-qrcode";
import {ConfirmDeleteComponent} from "./modals/confirm-delete/confirm-delete.component";

const COMPONENTS: any = [
    AlertComponent,
    ValidationMessagesComponent,
    CustomMenuHeaderComponent,
    FileUploadComponent,
    CustomTableComponent,
    SettingHeaderComponent,
    TabCardComponent,
    POOtherChargesComponent,
    iBASModalComponent,
    ViewAddressComponent,
    AddAddressComponent,
    ContactDetailsComponent,
    SalesDispatchDetailsComponent,
    AddItemSuppliersComponent,
    AddItemUOMComponent,
    SalesDispatchDetailsComponent,
    AddMultipleCustomerSkuComponent,
    PopUpNotesComponent,
    CancelPoComponent,
    BOMCompositionComponent,
    DetailsOfSupplierListComponent,
    DetailsOfCustomersListComponent,
    CustomSearchDetailsModalComponent,
    DetailsOfChannelPartnerComponent,
    AddItemChannelPartnerComponent,
    ConfirmDeleteComponent
];
const PIPES: any = [
    SearchFilterPipe,
    TruncatePipe,
    ToWordsPipe,
    LabelTranslatePipe,
    CompanyCurrencyPipe,
    UOMUnitsMasterPipe,
    SalesUOMUnitsMasterPipe,
    JCEDisabledProdInfoPipe,
    JCEDisabledIPQAInfoPipe
];
const DIRECTIVES: any = [
    NgbdSortableHeader,
    TwoDigitDecimalNumberDirective,
    AccessControlDirective,
    LazyLoadImageDirective
];
const MODULES: any = [CommonModule, NgbModule, ReactiveFormsModule, FormsModule, NgSelectModule, QRCodeModule];
@NgModule({
    declarations: [
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES,
        CancelSoLineDetailsComponent,
        EllipsisDirective,
        HighlightSearchDirective,
        TimeAgoDirective,
        CopyToClipboardDirective
    ],
    imports: [...MODULES],
    exports: [...COMPONENTS, ...MODULES, ...DIRECTIVES, ...PIPES]
})
export class SharedModule {}
