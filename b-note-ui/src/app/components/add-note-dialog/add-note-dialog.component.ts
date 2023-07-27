import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note.model.interface';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.css']
})
export class AddNoteDialogComponent {

  titleError: string = 'Title field empty or too long!';

  note: Note;
  noteForm: FormGroup;

  constructor(){
    this.note = {
      title: ''
    }
    this.noteForm = new FormGroup({
      'title': new FormControl('', [
        Validators.maxLength(255),
        Validators.required
      ]),
      'description': new FormControl()
    });
  }

  changeTitle(event: any){
    this.note.title = event.target.value;
  }

  changeDescription(event: any){
    this.note.description = event.target.value;
  }

  addNewNote(){
    this.note = {
      title: this.noteForm.value.title,
      description: this.noteForm.value.description
    }
  }
}
