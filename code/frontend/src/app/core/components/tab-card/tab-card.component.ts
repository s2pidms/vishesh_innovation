import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
    selector: "appTabCard",
    templateUrl: "./tab-card.component.html"
})
export class TabCardComponent implements OnInit {
    @Input() data: {cards: any; noOfCards: number; cardClass: string} | any = {};

    @Output() dataChange = new EventEmitter<any>();
    constructor() {}

    ngOnInit() {}
    navigateTo(card: object) {
        this.dataChange.emit(card);
    }
}
