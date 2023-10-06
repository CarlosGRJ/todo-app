import { useState } from 'react';
import { type INote } from '../interfaces/Note';
import { saveNotesToStorage } from '../storage';

function useNote() {
  // Initialize 'notes' state with data from local storage or an empty array
  const [notes, setNotes] = useState<INote[]>(() => {
    const notesFromStorage = window.localStorage.getItem('notes');
    return notesFromStorage !== null ? JSON.parse(notesFromStorage) : [];
  });
  // Initialize 'note' state for handling editing or adding new notes
  const [note, setNote] = useState<INote | null>(null);

  const addNote = (newNote: INote) => {
    // We create this newNotes const to handle the asyncronous state of setNotes
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    saveNotesToStorage({ notes: newNotes });
  };

  const editNote = (prevNote: INote) => {
    // We iterate in a immutable way the notes to set Notes with the new notes
    const newNotes = notes.map((note) => {
      if (note.id === prevNote.id) {
        return {
          ...note,
          title: prevNote.title,
          content: prevNote.content
        };
      } else {
        return note;
      }
    });
    setNotes(newNotes);
    // Save new notes to localStorage
    saveNotesToStorage({ notes: newNotes });
    // Complete editing mode and clean the form
    setNote(null);
  };

  // Set 'note' state to the note being edited and use it to fill the form to update it
  const noteToEdit = (prevNote: INote) => {
    setNote(prevNote);
  };

  const deleteNote = (noteId: string) => {
    const filteredNotes = notes.filter((note) => note.id !== noteId);
    setNotes(filteredNotes);
    // Save filtered notes to localStorage
    saveNotesToStorage({ notes: filteredNotes });
    // clean the form
    setNote(null);
  };

  return {
    notes,
    addNote,
    deleteNote,
    noteToEdit,
    note,
    editNote
  };
}

export default useNote;
