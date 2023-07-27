package app.bnote.bnote.controller;

import app.bnote.bnote.model.dao.NoteDTO;
import app.bnote.bnote.service.NoteService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping(value = "/create")
    public NoteDTO createNewNote(@RequestBody NoteDTO newNote) {
        return noteService.addNote(newNote.toNote());
    }

    @GetMapping(value = "/search")
    public List<NoteDTO> getAll() {
        return noteService.getAllNotes();
    }

    @GetMapping(value = "/search/{text}")
    public List<NoteDTO> getNotesByText(@PathVariable("text") String text) {
        return noteService.getByText(text);
    }

    @DeleteMapping(value = "/delete/{id}")
    public String deleteById(@PathVariable("id") Integer id) {
        return noteService.removeNoteById(id);
    }
}
