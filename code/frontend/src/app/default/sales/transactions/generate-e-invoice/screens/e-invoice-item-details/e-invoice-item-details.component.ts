import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-e-invoice-item-details',
  templateUrl: './e-invoice-item-details.component.html',
})
export class EInvoiceItemDetailsComponent implements OnInit {

  @Input() itemDetailsArr: any = [];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  dismissModel() {
    this.activeModal.close(this.itemDetailsArr)
  }
}

