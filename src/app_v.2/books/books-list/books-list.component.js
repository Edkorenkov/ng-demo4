
import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({

    selector: "books-list",

    templateUrl: "./books-list.component.html",
    
    styleUrls: [

        "./books-list.component.css",

    ],

})
export default class BooksSidebarComponent {

    @Input() books;

    @Input() searchQuery;    

    @Output() onSelectBook = new EventEmitter();

    @Output() onCreateBook = new EventEmitter();

    @Output() onSaveEmptyBook = new EventEmitter();

    @Output() onDiscardEmptyBook = new EventEmitter();


    constructor() {

    };

}
