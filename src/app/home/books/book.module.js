
import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";


import BookListService from "./book-list/book-list.service";

import BookListPipe from "./book-list/book-list.pipe";


import BookListComponent from "./book-list/book-list.component";

import BookCreateComponent from "./book-create/book-create.component";

import BookSearchComponent from "./book-search/book-search.component";


@NgModule({

    imports: [

        CommonModule,

        FormsModule

    ],

    declarations: [ BookListComponent, BookCreateComponent, BookSearchComponent, BookListPipe ],

    providers: [ BookListService ],

})
export default class BookModule {}