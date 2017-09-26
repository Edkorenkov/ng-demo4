
import { Component, Input } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";


@Component({

    selector: "pages-controls",

    templateUrl: "./pages-controls.component.html",

    styleUrls: [

        "./pages-controls.component.css",

    ],

})

export default class PagesControlsComponent {

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

        this._router.navigate(["/books", page.bookId, "pages"]);

    };

    OnPrevPage(page) {

        if (!page.prevPageId) {

            this._router.navigate(["/books", page.bookId, "pages"]);

            return;

        };

        this._router.navigate(["/books", page.bookId, "pages", page.prevPageId]);

        return;

    };

    OnNextPage(page) {

        if (page.nextPageId < 0) {

            this._router.navigate(["/books", page.bookId, "pages", "create"]);

            return;

        };

        this._router.navigate(["/books", page.bookId, "pages", page.nextPageId]);

        return;

    };

};