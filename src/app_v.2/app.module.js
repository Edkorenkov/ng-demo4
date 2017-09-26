
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { BrowserModule } from "@angular/platform-browser";


import { BooksModule } from "./books/books.module";

import { SignupModule } from "./signup/signup.module";


import AppComponent from "./app.component";


@NgModule({

    imports: [ 

        BrowserModule,

        BooksModule,

        SignupModule,

        RouterModule.forRoot([

            {

                path: "",

                redirectTo: "books",

                pathMatch: "full",

            },

        ], 
        
        { 
            
            useHash: true,

        }),

    ],

    declarations: [
        
        AppComponent,

    ],

    providers: [ ],

    bootstrap: [ AppComponent ],

})
export default class AppModule {}