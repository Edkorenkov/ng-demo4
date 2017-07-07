
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";


import BookModule from "./books/book.module";


import HomeComponent from "./home.component";

import SidebarComponent from "./sidebar/sidebar.component";

import SecondarySidebarComponent from "./secondary-sidebar/secondary-sidebar.component";

import BookListComponent from "./books/book-list/book-list.component";

import BookCreateComponent from "./books/book-create/book-create.component";


import AuthService from "../shared/auth.service";

import LoginGuard from "../shared/guards/login.guard";


@NgModule({

    imports: [ 

        BookModule,

        RouterModule.forChild([

            {

                path: "home",

                component: HomeComponent,

                canActivate: [ LoginGuard ],

                children: [

                    {
                        path: "books", component: BookListComponent,
                    },

                    {
                        path: "books/create", component: BookCreateComponent,
                    },

                ]
                
            },

        ]),

    ],

    declarations: [ HomeComponent, SidebarComponent, SecondarySidebarComponent ],

    providers: [ AuthService, LoginGuard ],

})
export default class HomeModule {}