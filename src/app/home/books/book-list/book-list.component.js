
import { Component } from '@angular/core';


import BookListService from "./book-list.service";


const DefaultBookTitle = "Empty book title";


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

	CreateEmptyBook() {

		let lastEmptyBook = this._bookListService.GetLastEmptyBook(this.books);

		if (lastEmptyBook) {

			this.SaveEmptyBookChanges(lastEmptyBook);

		};

		let book = this._bookListService.CreateEmptyBook();

		let lastBook = this._bookListService.GetLastBook(this.books);

		book.id = lastBook.id + 1;

		this.books.push(book);

		console.log("new book will be created");

	};

	SaveEmptyBookChanges(book) {

		if (!book.title) {

			book.title = DefaultBookTitle;

		};

		book.isNewer = false;

	};

	DiscardEmptyBookChanges(book) {

		this.books.pop();

	};

}
