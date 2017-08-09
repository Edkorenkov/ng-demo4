
import { Component } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";


import PageService from "./page.service";


@Component({

    templateUrl: "./page.component.html",

    styleUrls: [ "./page.component.css" ],

})

export default class PageComponent {

    constructor(route: ActivatedRoute, router: Router, pageService: PageService) {

        this._router = router;

        this._route = route;

        this._pageService = pageService;

    }

    ngOnInit() {

        this._route.params
        
            .switchMap(params => this._pageService.GetPageById(+params["pageId"]))

            .subscribe(page => {

                this.page = page;

                console.log(this.page);

            });

    };

    OnBack(page) {

        this._router.navigate(["/home/books", page.bookId, "pages"]);

    };

    OnPrevPage(page) {

        if (!page.prevPageId) {

            this._router.navigate(["/home/books", page.bookId, "pages"]);

            return;

        };

        this._router.navigate(["/home/books", page.bookId, "page", page.prevPageId]);

        return;

    };

    OnNextPage(page) {

        if (page.nextPageId < 0) {

            this._router.navigate(["/home/books", page.bookId, "pages"]);

            return;

        };

        this._router.navigate(["/home/books", page.bookId, "page", page.nextPageId]);

        return;

    };

}
