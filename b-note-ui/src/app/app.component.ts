import { animate, animateChild, keyframes, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('displaySearchApp', [
      state('true', style({
        position: 'absolute',
        top: '15%',
      })),
      state('false', style({
        position: 'absolute',
        top: '50%',
      })),
      transition('* <=> *', [
        animate('1s'),
        query('.contentFields', animateChild()),
      ]),
    ]),
    trigger('toggleSearchBar', [
      state('true', style({
        hidden: 'false',
        opacity: '1',
      })),
      state('false', style({
        hidden: 'true',
        opacity: '0',
      })),
      transition('* <=> *', animate('900ms ease'))
    ]),
  ]
})
export class AppComponent {
  title = 'b-note-ui';

  displaySearchApp = false;
  isAnimationDone = false;
  searchTerm = new FormControl('', [Validators.required])

  showSearchApp() {
    this.displaySearchApp = !this.displaySearchApp;
  }

  toggleSearchBarAnimationDone(){
    this.isAnimationDone = true;
  }
}
