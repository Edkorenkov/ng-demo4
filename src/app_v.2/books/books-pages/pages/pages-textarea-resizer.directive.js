
import { Directive, HostListener, ElementRef, AfterViewInit } from "@angular/core";

import Rx from "rxjs";

import $ from "jquery";

import { Observable } from "rxjs/Observable";

import { Subject } from "rxjs/Subject";

import { Subscription } from "rxjs/Subscription";


@Directive({

    selector: "[textareaResizer]"

})

export default class PageTextareaResizerDirective {

    constructor(element: ElementRef) {
        
        this._element = element;

        this._resizeSubject = new Subject();

        this._resizeSubscription = null;

    };

    ngAfterViewInit() {

        let $textarea = $(this._element.nativeElement);

        let $parent = $textarea.parents(".page-editor");

        let parentOffset = $parent.offset();

        let offsetHeight = Math.floor($parent.innerHeight() - $textarea.innerHeight());


        this._resizeSubscription = 
        
            this._resizeSubject
                
                .debounceTime(500)
                
                .subscribe(resizeEvent => {

                    $textarea.height($(resizeEvent.target).innerHeight() - offsetHeight - parentOffset.top);

                });

    };

    @HostListener("window:resize", ["$event"])
    OnWindowScroll(event) {

        this._resizeSubject.next(event);

    };

};