
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { BrowserModule } from "@angular/platform-browser";


import HomeModule from "./home/home.module";


import AppComponent from "./app.component";

import AppWindowRef from "./app-window.service";

import HomeComponent from "./home/home.component";

import LoginComponent from "./login/login.component";



@NgModule({

    imports: [ 

        BrowserModule,

        HomeModule,

        RouterModule.forRoot([

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

    declarations: [ AppComponent, LoginComponent ],

    providers: [ 

        {

            provide: AppWindowRef, useValue: window,

        }

    ],

    bootstrap: [ AppComponent ],

})
export default class AppModule {}