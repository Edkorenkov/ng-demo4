
import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";


import BookListService from "./book-list/book-list.service";

import BookPagesService from "./book-pages/book-pages.service";

import PageService from "./book-pages/page/page.service";

import BookListPipe from "./book-list/book-list.pipe";


import BookListComponent from "./book-list/book-list.component";

import BookCreateComponent from "./book-create/book-create.component";

import BookSearchComponent from "./book-search/book-search.component";

import BookPagesComponent from "./book-pages/book-pages.component";

import PageComponent from "./book-pages/page/page.component";

import PageCreateComponent from "./book-pages/page/page-create.component";

import PageControlsComponent from "./book-pages/page/page-controls.component";


import PageTextareaResizerDirective from "./book-pages/page/page-textarea-resizer.directive";


@NgModule({

    imports: [

        CommonModule,

        FormsModule,

        RouterModule,

    ],

    declarations: [ 
        
        BookListComponent,
        
        BookCreateComponent, 
        
        BookSearchComponent, 

        BookPagesComponent,

        PageComponent,

        PageCreateComponent,

        PageControlsComponent,
        
        BookListPipe,

        PageTextareaResizerDirective
    
    ],

    providers: [ BookListService, BookPagesService, PageService ],

})
export default class BookModule {}