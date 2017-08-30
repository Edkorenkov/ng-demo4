
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";


import BookModule from "./books/book.module";


import HomeComponent from "./home.component";

import SidebarComponent from "./sidebar/sidebar.component";

import BookListComponent from "./books/book-list/book-list.component";

import BookPagesComponent from "./books/book-pages/book-pages.component";

import PageComponent from "./books/book-pages/page/page.component";

import PageCreateComponent from "./books/book-pages/page/page-create.component";


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

                        path: "books",

                        component: BookListComponent,

                        children: [

                            {

                                path: ":bookId/pages",

                                component: BookPagesComponent,
                            
                            },

                            {

                                path: ":bookId/page/create",

                                component: PageCreateComponent,

                            },

                            {

                                path: ":bookId/page/:pageId",

                                component: PageComponent,

                            },

                        ]

                    },

                ],
                
            },

        ]),

    ],

    declarations: [ HomeComponent, SidebarComponent ],

    providers: [ AuthService, LoginGuard ],

})
export default class HomeModule {}