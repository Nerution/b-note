package app.bnote.bnote.model;

public class NoteBuilder {

    private String title;

    private String description;

    public NoteBuilder withTitle(String title) {
        this.title = title;
        return this;
    }

    public NoteBuilder withDescription(String description) {
        this.description = description;
        return this;
    }

    public Note build() {
        return new Note(title, description);
    }

}
