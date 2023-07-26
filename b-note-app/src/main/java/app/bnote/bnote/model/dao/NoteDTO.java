package app.bnote.bnote.model.dao;

import app.bnote.bnote.model.Note;

import java.time.LocalDate;

public class NoteDTO {

    private String id;
    private String title;
    private String description;
    private String creationDate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public NoteDTO withTitle(String title) {
        this.title = title;
        return this;
    }

    public NoteDTO withDescription(String description) {
        this.description = description;
        return this;
    }

    public NoteDTO withCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate.toString();
        return this;
    }

    public Note toNote(){
        return new Note(title, description);
    }
}
