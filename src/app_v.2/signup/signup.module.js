
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";

import { BrowserModule } from "@angular/platform-browser";

import { HttpModule } from "@angular/http";


import SignupComponent from "./signup.component";


@NgModule({

    imports: [ 

        HttpModule,

        BrowserModule,

        FormsModule,

        ReactiveFormsModule,

        RouterModule.forRoot([
            
            {

                path: "signup",

                component: SignupComponent,

            },

        ])

    ],

    declarations: [
        
        SignupComponent,
        
    ],

    providers: [ ],

    bootstrap: [ ],

})
export class SignupModule {}