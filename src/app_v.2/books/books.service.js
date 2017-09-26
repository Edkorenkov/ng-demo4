
import { Injectable } from "@angular/core";

import Rx from "rxjs";

import { Observable } from "rxjs/Observable";


@Injectable()
export default class BooksService {

    constructor() {

    };

    books = [

        {

            id: 1,

            title: "Book title",

            dateCreated: "17:20 July",

            isSelected: false,

            isNewer: false,

        }, 

        {

            id: 2,

            title: "Working files",

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

            dateCreated: "15:42 August",

            isSelected: false,

            isNewer: true,

        };

    };

};