
import { Component } from '@angular/core';


import BookListService from "./book-list.service";


@Component({

	templateUrl: "./book-list.component.html",

	styleUrls: [ 
		
		"./book-list.component.css",
	
		"../shared/secondary-sidebar.component.css"

	],

})
export default class BookListComponent {

	constructor(bookListService: BookListService) {

		this._bookListService = bookListService;

		this.books = [];

	};

	ngOnInit() {

		this._bookListService.GetBooks().subscribe(book => this.books.push(book));

	};

	SelectBook(book) {

		this.books.forEach(book => book.isSelected = false);

		book.isSelected = true;

	};

	SearchHandler(data) {

		this.bookSearchQuery = data;

	};

	CreateBook() {

		console.log("new book will be created");

	};

}
