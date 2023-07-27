package app.bnote.bnote.service;

import app.bnote.bnote.model.Note;
import app.bnote.bnote.model.dao.NoteDTO;

import java.util.List;

public interface NoteService {

    NoteDTO addNote(Note note);

    List<NoteDTO> getAllNotes();

    List<NoteDTO> getByText(String text);

    String removeNoteById(Integer id);

}
