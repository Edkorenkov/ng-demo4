
import { Pipe } from "@angular/core";


@Pipe({

    name: "bookSearch",

})
export default class BookListPipe {

    transform(books, filterBy) {

        if (!filterBy) {

            return books;

        };

        return books.filter(book => book.title.toLowerCase().includes(filterBy.toLowerCase(), 0));

    };

};