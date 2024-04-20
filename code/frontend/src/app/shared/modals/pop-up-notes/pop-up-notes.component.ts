import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up-notes',
  templateUrl: './pop-up-notes.component.html',
})
export class PopUpNotesComponent implements OnInit {
  @Input() itemCodes: any = [];
  @Input() alertMessage: any = [];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  dismissModel() {
    let obj = {
      itemCodes: this.itemCodes
    }
    this.activeModal.close(obj)
  }

}
