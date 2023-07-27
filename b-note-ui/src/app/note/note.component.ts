import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoteModel } from '../interfaces/note.model.interface';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, OnDestroy{

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

  private getAllNotes() {
    this.noteService.getAllNotes().subscribe(
      notes => {
        this.fetchedNotes = notes;
      }
    )
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }
}
