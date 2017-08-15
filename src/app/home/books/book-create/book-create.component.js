
import { Component } from '@angular/core';



@Component({

	templateUrl: "./book-create.component.html",

	styleUrls: [

		"./book-create.component.css",

		"../shared/secondary-sidebar.component.css"

	],

})

export default class BookCreateComponent {

	constructor() {

		this.book = null;

	};

	ngOnInit() {

		this.book = {

            title: "",

            description: "",

		};

	};

};
