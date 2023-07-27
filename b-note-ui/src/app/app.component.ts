import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteDialogComponent } from './add-note-dialog/add-note-dialog.component';


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
        query('.contentFields', animateChild(), {optional: true}),
      ]),
    ]),
    trigger('toggleSearchBar', [
      state('true', style({
        visibility: 'visible',
        opacity: '1',
      })),
      state('false', style({
        visibility: 'hidden',
        opacity: '0',
      })),
      transition('* <=> *', animate('900ms ease'))
    ]),
  ]
})
export class AppComponent {

  displaySearchApp = false;
  searchTerm = new FormControl('', [Validators.required])

  constructor(
    private dialog: MatDialog
  ) {}

  showSearchApp() {
    this.displaySearchApp = !this.displaySearchApp;
    this.searchTerm.reset();
  }

  openAddNoteDialog() {
    const dialogRef = this.dialog.open(AddNoteDialogComponent, {
      width: '350px',
      height: '350px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true,
    })

    
  }
}
