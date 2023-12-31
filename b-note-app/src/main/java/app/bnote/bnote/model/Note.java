package app.bnote.bnote.model;

import app.bnote.bnote.model.dao.NoteDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@Entity
@Table(name = "Note")
@NamedQueries({
        @NamedQuery(name = "Note.getAll", query = "SELECT n FROM Note n"),
        @NamedQuery(name = "Note.getById", query = "SELECT n FROM Note n WHERE n.id = :id"),
        @NamedQuery(name = "Note.getByTextInTitleOrDescription", query = "SELECT n FROM Note n WHERE n.title like :text OR n.description like :text"),
})
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Lob
    private String description;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDate creationDate;

    public Note() {
    }

    public Note(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public NoteDTO toDTO() {
        return new NoteDTO()
                .withTitle(title)
                .withDescription(description);
    }
}
