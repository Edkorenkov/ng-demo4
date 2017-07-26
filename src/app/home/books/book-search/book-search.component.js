
import { Component, Output, EventEmitter } from '@angular/core';



@Component({

	selector: "book-search",

	templateUrl: "./book-search.component.html",

	styleUrls: [ "./book-search.component.css" ],

})

export default class BookSearchComponent {

	@Output() search = new EventEmitter();


	searchQuery = "";


	SearchHandler(query) {

		this.search.emit(query);

	};

};
