import styles from './NotesList.module.css';

import { type INote } from '../../interfaces/Note';
import Note from '../Note/Note';

interface NotesListProps {
  notes: INote[];
  deleteNote: (noteId: string) => void;
  editNote: (prevNote: INote) => void;
}

function NotesList({ notes, deleteNote, editNote }: NotesListProps) {
  return (
    <div className={styles.list}>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={{ id: note.id, title: note.title, content: note.content }}
          onDelete={deleteNote}
          onEdit={editNote}
        />
      ))}
    </div>
  );
}

export default NotesList;
