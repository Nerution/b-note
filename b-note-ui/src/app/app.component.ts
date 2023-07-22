import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('displaySearchApp', [
      state('open', style({
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translate(auto, -50%)',
      })),
      state('closed', style({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('1s')
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'b-note-ui';

  displaySearchApp = false;
  searchTerm = new FormControl('', [Validators.required])

  showSearchApp() {
    this.displaySearchApp = !this.displaySearchApp;
  }
}
