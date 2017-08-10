
import { Injectable } from "@angular/core";


@Injectable()
export default class AppWindowRef {

   get nativeWindow() {

      return window;

   };

};