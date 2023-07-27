import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteDialogComponent } from './components/add-note-dialog/add-note-dialog.component';
import { Note } from './interfaces/note.model.interface';


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
  searchTerm = new FormControl()
  searchTextString: string = '';
  newNote: Note = {title: ''};

  constructor(
    private dialog: MatDialog
  ) {}

  showSearchApp() {
    this.displaySearchApp = !this.displaySearchApp;
    this.searchTerm.reset();
    if (this.displaySearchApp){
      this.searchTextString = '';
    }
  }

  searchText(event: any){
    this.searchTextString = event.target.value;
  }

  openAddNoteDialog() {
    const element = document.getElementsByClassName("cdk-overlay-container")[0];
    if (element){
      element.setAttribute('style', 'visibility: visible');
    }

    const dialogRef = this.dialog.open(AddNoteDialogComponent, {
      width: '350px',
      height: '350px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
    });

    dialogRef.afterClosed().subscribe(result => {
      const element = document.getElementsByClassName("cdk-overlay-container")[0];
      element.setAttribute('style', 'visibility: hidden');

      this.createNewNote(result);
    });
  }

  private createNewNote(note: Note){
    this.newNote = note;
  }
}
