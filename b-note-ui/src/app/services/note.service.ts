import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteModel } from '../interfaces/note.model.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public BASE_MODEL_API = 'http://localhost:8080'

  constructor(public http: HttpClient) { }

  submitNote(newNote: NoteModel): Observable<NoteModel>{
    return this.http.post<any>(this.BASE_MODEL_API + "/create", newNote);
  }

  getAllNotes(): Observable<Array<NoteModel>>{
    return this.http.get<any>(this.BASE_MODEL_API + "/search");
  }

  getNoteByText(text: string): Observable<NoteModel>{
    return this.http.get<any>(this.BASE_MODEL_API + "/search" + "/" + text);
  }

  removeNote(id: number): Observable<string> {
    return this.http.delete<any>(this.BASE_MODEL_API + "/delete" + "/" + id);
  }
}
