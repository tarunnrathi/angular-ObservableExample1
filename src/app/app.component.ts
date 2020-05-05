import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  private data:Observable<string>;
  private fruits: Array<string> = [];
  private anyErrors: boolean;
  private finished: boolean;
  constructor() { }
  ngOnInit(){
  }
  Start(){
  this.data = new Observable(
    observer =>
    {
            setTimeout(() =>
            {
                observer.next('Apple');
            }, 1000);
           
            setTimeout(() =>
            {
                observer.next('mango');
            }, 2000);
           /*  setTimeout(() =>
            {
                observer.error(new Error('Error Occured'));
            }, 3000); */
            setTimeout(() =>
            {
                observer.next('Orannge');
            }, 3000);
            setTimeout(() =>
            {
                observer.complete();
            }, 4000);           
   }
);
let subscription = this.data. subscribe(
fruit => this.fruits.push(fruit),
    error => this.anyErrors = false,
    () => this.finished = true
);
/* setTimeout(function(){
subscription.unsubscribe();
},5000); */
 }
}
