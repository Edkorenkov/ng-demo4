
import { Injectable } from "@angular/core";

import Rx from "rxjs";

import { Observable } from "rxjs/Observable";


@Injectable()
export default class BookPagesService {

    constructor() {

    };

    pages = [

        {

            id: 1,

            bookId: 1,

            title: "Page one from Book 1",

        }, 

        {

            id: 2,

            bookId: 1,

            title: "Page two from Book 1",

        }, 

        {

            id: 3,

            bookId: 1,

            title: "Page tree from Book 1",

        }, 

        {

            id: 4,

            bookId: 2,

            title: "Page one from Book 2",

        }, 

        {

            id: 5,

            bookId: 1,

            title: "Page tree from Book 1",

        }, 

    ];
    
    GetPagesByBookId(bookId) {

        let pages = this.pages.filter(page => page.bookId === bookId);

        return Rx.Observable.from(pages);

    };

};