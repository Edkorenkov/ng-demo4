
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";

import { BrowserModule } from "@angular/platform-browser";


import SidebarComponent from "../sidebar/sidebar.component";

import BooksComponent from "./books.component";

import BooksSearchComponent from "./books-search/books-search.component";

import BooksSidebarComponent  from "./books-list/books-list.component";

import BooksPagesComponent from "./books-pages/books-pages.component";

import PagesComponent from "./books-pages/pages/pages.component";

import PagesCreateComponent from "./books-pages/pages/pages-create.component";

import PagesControlsComponent from "./books-pages/pages/pages-controls.component";


import BooksService from "./books.service";

import BooksSearchPipe from "./books-search/books-search.pipe";

import BooksPagesService from "./books-pages/books-pages.service";

import PagesService from "./books-pages/pages/pages.service";


@NgModule({

    imports: [ 

        BrowserModule,

        FormsModule,

        RouterModule.forRoot([
            
            {

                path: "books",

                component: BooksComponent,

                children: [

                    { path: ":bookId/pages", component: BooksPagesComponent, },

                    { path: ":bookId/pages/:pageId", component: PagesComponent, },

                    { path: ":bookId/pages/create", component: PagesCreateComponent, },

                ]

            },

        ])

    ],

    declarations: [
        
        SidebarComponent,
        BooksComponent,
        BooksSearchComponent,
        BooksSearchPipe,
        BooksSidebarComponent, 
        BooksPagesComponent,
        PagesComponent,
        PagesCreateComponent,
        PagesControlsComponent,
        
    ],

    providers: [ 

        BooksService,
        BooksPagesService,
        PagesService,

    ],

    bootstrap: [ ],

})
export class BooksModule {}