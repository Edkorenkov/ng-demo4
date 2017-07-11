
import { Component } from '@angular/core';



@Component({

	templateUrl: "./book-list.component.html",

	styleUrls: [ "./book-list.component.css" ],

})

export default class BookListComponent {

	books = [

		{

			id: 1,

			title: "Book title",

			description: "Sample description of the book.",

			dateCreated: "17:20 July",

			isSelected: false,

		}, 

		{

			id: 2,

			title: "Working files",

			description: "Sample description of the book.",

			dateCreated: "18:22 July",

			isSelected: false,

		}, 

	];

}
