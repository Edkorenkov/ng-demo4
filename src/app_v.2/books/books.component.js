
import { Component } from "@angular/core";

import BooksService from "./books.service";


const DefaultBookTitle = "Empty book title";


@Component({

    templateUrl: "./books.component.html",
    
    styleUrls: [

        "./books.component.css",

    ],

})
export default class BooksComponent {

    constructor(booksService: BooksService) {

		this._booksService = booksService;

        this.books = [];

        this.searchBookQuery = "";

	};

	ngOnInit() {

		this._booksService.GetBooks().subscribe(book => this.books.push(book));

	};

	SelectBook(book) {

		this.books.forEach(book => book.isSelected = false);

		book.isSelected = true;

    };
    
    SearchBook(queryString) {

        this.searchBookQuery = queryString;

    };

	CreateEmptyBook() {

		let lastEmptyBook = this._booksService.GetLastEmptyBook(this.books);

		if (lastEmptyBook) {

			this.DiscardEmptyBook(lastEmptyBook);

		};

		let book = this._booksService.CreateEmptyBook();

		let lastBook = this._booksService.GetLastBook(this.books);

		book.id = lastBook.id + 1;

		this.books.push(book);

	};

	SaveEmptyBook(book) {

		if (!book.title) {

			book.title = DefaultBookTitle;

		};

		book.isNewer = false;

	};

	DiscardEmptyBook(book) {

		this.books.pop();

	};

}
