
import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router";


@Component({

    templateUrl: "./page-create.component.html",

    styleUrls: [ "./page.component.css" ],

})

export default class PageCreateComponent {

    constructor(route: ActivatedRoute) {

        this._route = route;

        this.page = null;

    };

    ngOnInit() {

        this._route.params
        
            .subscribe(params => {

                console.log(+params["bookId"]);

                this.page = {

                    id: 0,

                    prevPageId: 0,

                    nextPageId: -1,

                    bookId: +params["bookId"],

                    creator: null,

                    dateCreated: "Thursday, 10 August 2017",

                    title: "",

                    text: "",

                };

            });

        this.isEnableNavigationControls = false;

    };

};