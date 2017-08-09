
import { Injectable } from "@angular/core";

import Rx from "rxjs";

import { Observable } from "rxjs/Observable";


@Injectable()
export default class PageService {

    constructor() {

    };

    GetPageById(pageId) {

        return Rx.Observable.from([{

            id: 1,

            prevPageId: 0,

            nextPageId: 2,

            bookId: 1,

            creator: {

                id: 1,

                name: "John Smith",

            },

            dateCreated: "Monday, 20 March 2017",

            title: "When The Morning Dawns",

            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        },

        {

            id: 2,

            prevPageId: 1,

            nextPageId: -1,

            bookId: 1,

            creator: {

                id: 1,

                name: "John Smith",

            },

            dateCreated: "Thuesday, 21 March 2017",

            title: "When The Morning Dawns2",

            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        }]).find(page => page.id === pageId);

    };

};