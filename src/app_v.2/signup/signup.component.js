
import { Component } from "@angular/core";

import { FormControl, FormGroup } from "@angular/forms";

import { Http, Response, Headers, RequestOptions } from "@angular/http";

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({

	templateUrl: "./signup.component.html",

})
export default class SignupComponent {

	constructor(http: Http) {

		this._http = http;

	};

	ngOnInit() {

		this.user = new FormGroup({

			name: new FormControl(""),

			password: new FormControl(""),

		});

	};

	OnSubmit(user) {

		console.log(user);

		let headers = new Headers({ 'Content-Type': 'application/json' });

		let options = new RequestOptions({ headers: headers });


		this._http.post("http://localhost:5000/api/users", JSON.stringify(user), options)

			.map(res => console.log(res.json()))

			.catch(error => Observable.throw(console.log(error.json().error) || 'Server error'));

	};


}
