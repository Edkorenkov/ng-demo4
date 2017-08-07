
import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router";


import PageService from "./page.service";


@Component({

    templateUrl: "./page.component.html",

    styleUrls: [ "./page.component.css" ],

})

export default class PageComponent {

    constructor(route: ActivatedRoute, pageService: PageService) {

        this._route = route;

        this._pageService = pageService;

    }

    ngOnInit() {

        this._route.params
        
            .switchMap(params => this._pageService.GetPageById(+params["pageId"]))

            .subscribe(page => this.page = page);

	};

}
