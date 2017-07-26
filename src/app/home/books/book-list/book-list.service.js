
import { Injectable } from "@angular/core";


@Injectable()
export default class BookListService {

    constructor() {

    };

    
    GetBooks() {

        return [

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

    };

};