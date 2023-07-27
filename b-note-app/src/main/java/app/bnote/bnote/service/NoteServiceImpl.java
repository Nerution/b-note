package app.bnote.bnote.service;

import app.bnote.bnote.model.Note;
import app.bnote.bnote.model.dao.NoteDTO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService {

    @PersistenceContext
    EntityManager em;

    @Override
    @Transactional
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
        return em.createNamedQuery("Note.getByTextInTitleOrDescription", NoteDTO.class).setParameter("text", text)
                .getResultList();
    }

    @Override
    @Transactional
    public String removeNoteById(Integer id) {
        Note noteToRemove = em.createNamedQuery("Note.getById", Note.class).setParameter("id", id)
                .getSingleResult();
        em.remove(noteToRemove);
        return noteToRemove.getId().toString();
    }
}
