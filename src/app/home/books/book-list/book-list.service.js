
import { Injectable } from "@angular/core";

import Rx from "rxjs";

import { Observable } from "rxjs/Observable";


@Injectable()
export default class BookListService {

    constructor() {

    };

    books = [

        {

            id: 1,

            title: "Book title",

            description: "Sample description of the book.",

            dateCreated: "17:20 July",

            isSelected: false,

            isNewer: false,

        }, 

        {

            id: 2,

            title: "Working files",

            description: "Sample description of the book.",

            dateCreated: "18:22 July",

            isSelected: false,

            isNewer: false,

        }, 

    ];
    
    GetBooks() {

        return Rx.Observable.from(this.books);

    };

    GetLastBook(books) {

        return books[books.length - 1];

    };

    GetLastEmptyBook(books) {

        return books.find(book => book.isNewer);

    };

    CreateEmptyBook() {

        return {
            
            id: 0,

            title: "",

            description: "",

            dateCreated: "15:42 August",

            isSelected: false,

            isNewer: true,

        };

    };

};