import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoteModel } from 'src/app/interfaces/note.model.interface';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, OnChanges, OnDestroy{


  @Input() newNote: any;
  @Input() searchText: string = '';
  private subscriptions = new Subscription();
  fetchedNotes: Array<NoteModel> = [];

  constructor(
    private noteService: NoteService
  ){}

  ngOnInit(): void {
      this.subscriptions.add(
        this.getAllNotes()
      );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.newNote.title){
      this.createNewNote();
      this.newNote.title = null;
    }
    if (this.searchText){
      this.searchByText(this.searchText);
    } else if (this.searchText === ''){
      this.getAllNotes();
    }
  }

  private createNewNote(){
    this.noteService.submitNote(this.newNote).subscribe(() => {
      this.getAllNotes();
    })
  }

  private searchByText(text: string){
    this.noteService.getNoteByText(text).subscribe(
      notes => {
        this.fetchedNotes = notes;
      }
    )
  }

  private getAllNotes() {
    this.noteService.getAllNotes().subscribe(
      notes => {
        this.fetchedNotes = notes;
      }
    )
  }

  removeNote(note: NoteModel) {
    this.noteService.removeNote(note.id).subscribe(() => {
      this.getAllNotes();
    });
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }
}
