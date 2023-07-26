package app.bnote.bnote.model.dao;

public class NoteDAO {

    private String id;
    private String title;
    private String description;
    private String creationDate;

    public String getId() {
        return id;
    }

    public NoteDAO setId(String id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public NoteDAO setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public NoteDAO setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public NoteDAO setCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
}
