
import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";


import BookListComponent from "./book-list/book-list.component";

import BookCreateComponent from "./book-create/book-create.component";

import BookSearchComponent from "./book-search/book-search.component";


@NgModule({

    imports: [

        CommonModule

    ],

    declarations: [ BookListComponent, BookCreateComponent, BookSearchComponent ],

    providers: [  ],

})
export default class BookModule {}