
import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router";


import BookPagesService from "./book-pages.service";


@Component({

    templateUrl: "./book-pages.component.html",

    styleUrls: [ "./book-pages.component.css" ],

})

export default class BookPagesComponent {

    constructor(route: ActivatedRoute, bookPagesService: BookPagesService) {

        this._route = route;

        this._bookPagesService = bookPagesService;

        this.pages = [];  

    }

    ngOnInit() {

        this._route.params
        
            .switchMap(params => {

                this.pages = [];

                this.bookId = +params["bookId"];

                return this._bookPagesService.GetPagesByBookId(this.bookId);

            })

            .subscribe(page => this.pages.push(page));

	};

}
