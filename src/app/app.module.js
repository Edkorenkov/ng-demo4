
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { BrowserModule } from '@angular/platform-browser';


import AppComponent from "./app.component";

import HomeComponent from "./home/home.component";

import LoginComponent from "./login/login.component";


import AuthService from "./shared/auth.service";

import LoginGuard from "./shared/guards/login.guard";


@NgModule({

    imports: [ 

        BrowserModule,

        RouterModule.forRoot([

            {

                path: "home",

                component: HomeComponent,

                canActivate: [ LoginGuard ],

            },

            {

                path: "login",

                component: LoginComponent,

            },

            {

                path: "",

                redirectTo: "home",

                pathMatch: "full",

            },

        ], 
        { 
            
            useHash: true,

        }),

    ],

    declarations: [ AppComponent, HomeComponent, LoginComponent ],

    providers: [ AuthService ],

    bootstrap: [ AppComponent ],

})
export default class AppModule {}