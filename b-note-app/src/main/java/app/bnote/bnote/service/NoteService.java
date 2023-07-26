package app.bnote.bnote.service;

import app.bnote.bnote.model.Note;
import app.bnote.bnote.model.dao.NoteDTO;

import java.util.List;

public interface NoteService {

    public NoteDTO addNote(Note note);

    public List<NoteDTO> getAllNotes();

    public List<NoteDTO> getByText(String text);

    public String removeNoteById(Integer id);

}
