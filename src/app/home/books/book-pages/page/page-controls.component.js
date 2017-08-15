
import { Component, Input } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";


@Component({

    selector: "page-controls",

    templateUrl: "./page-controls.component.html",

    styleUrls: [

        "./page-controls.component.css",

    ],

})

export default class PageControlsComponent {

    @Input() page;

    @Input() isEnableNavigationControls;

    constructor(route: ActivatedRoute, router: Router) {

        this._router = router;

        this._route = route;

    };

    ngOnChanges(changes) {

        console.log(changes);

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

            this._router.navigate(["/home/books", page.bookId, "page", "create"]);

            return;

        };

        this._router.navigate(["/home/books", page.bookId, "page", page.nextPageId]);

        return;

    };

};