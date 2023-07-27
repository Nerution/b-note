export interface NoteModel {
    id: number,
    title: string,
    description?: string,
    creationDate: string
}

export interface Note {
    title: string,
    description?: string
}