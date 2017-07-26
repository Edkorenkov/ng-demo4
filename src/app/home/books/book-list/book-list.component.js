
import { Component } from '@angular/core';


import BookListService from "./book-list.service";


@Component({

	templateUrl: "./book-list.component.html",

	styleUrls: [ "./book-list.component.css" ],

})
export default class BookListComponent {

	constructor(bookListService: BookListService) {

		this._bookListService = bookListService;


		this.books = this._bookListService.GetBooks();

	};

	SelectBook(book) {

		this.books.forEach(book => book.isSelected = false);

		book.isSelected = true;

	};

	SearchHandler(data) {

		this.bookSearchQuery = data;

	};

}
