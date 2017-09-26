
import { Component } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";


import PagesService from "./pages.service";


@Component({

    templateUrl: "./pages.component.html",

    styleUrls: [ "./pages.component.css" ],

})

export default class PagesComponent {

    constructor(route: ActivatedRoute, router: Router, pagesService: PagesService) {

        this._router = router;

        this._route = route;

        this._pagesService = pagesService;

    }

    ngOnInit() {

        this._route.params
        
            .switchMap(params => this._pagesService.GetPageById(+params["pageId"]))

            .subscribe(page => {

                this.page = page;

            });

        this.isEnableNavigationControls = true;

    };

}
