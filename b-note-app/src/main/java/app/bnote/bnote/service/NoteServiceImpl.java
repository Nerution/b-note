package app.bnote.bnote.service;

import app.bnote.bnote.model.Note;
import app.bnote.bnote.model.dao.NoteDTO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService {

    @PersistenceContext
    EntityManager em;

    @Override
    public NoteDTO addNote(Note note) {
        em.persist(note);
        return note.toDTO();
    }

    @Override
    public List<NoteDTO> getAllNotes() {
        return em.createNamedQuery("Note.getAll", NoteDTO.class).getResultList();
    }

    @Override
    public List<NoteDTO> getByText(String text) {
        return em.createNamedQuery("Note.getByTextInTitleOrDescription", NoteDTO.class).getResultList();
    }

    @Override
    public String removeNoteById(Integer id) {
        NoteDTO noteToRemove = em.createNamedQuery("Note.getById", NoteDTO.class).getSingleResult();
        em.remove(noteToRemove);
        return noteToRemove.getId();
    }
}
