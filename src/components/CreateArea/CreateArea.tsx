import React, { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditNoteIcon from '@mui/icons-material/EditNote';

import styles from './CreateArea.module.css';
import { type INote } from '../../interfaces/Note';
import { v4 as uuidv4 } from 'uuid';
import ToastAlert from '../ToastAlert/ToastAlert';
import useToast from '../../hooks/useToast';

interface CreateAreaProps {
  onAdd: (note: INote) => void;
  onEdit: (note: INote) => void;
  noteToEdit: INote | null;
}

// Initial values, used when the form is initialized
const initialValues = {
  id: '',
  title: '',
  content: ''
};

function CreateArea({ onAdd, noteToEdit, onEdit }: CreateAreaProps) {
  const [note, setNote] = useState<INote>(initialValues);
  // State to expand the form
  const [expanded, setExpanded] = useState(false);
  const { showToast, toastOn, toastOff } = useToast();

  useEffect(() => {
    // Chek if we are editing or creating a note
    if (noteToEdit !== null) {
      setNote(noteToEdit);
    } else {
      setNote(initialValues);
    }
  }, [noteToEdit]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const submitNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if we have values in the form fields
    if (note.title.length > 0 || note.content.length > 0) {
      // Check if we are submitting an existing note or a new one.
      if (noteToEdit !== null) {
        onEdit(note);
      } else {
        // We use uuidv4 to create a unique id, we do it in a const to handle async
        const newNote = {
          ...note,
          id: uuidv4()
        };
        onAdd(newNote);
      }
    } else {
      // This is a toast to inform that you can't add notes without any content
      toastOn();
    }
    // Clear the fields after submitting a note
    resetForm();
  };

  const resetForm = () => {
    setNote(initialValues);
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form onSubmit={submitNote} className={styles['create-note']}>
        {expanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
            autoFocus
          />
        )}

        <textarea
          name="content"
          rows={expanded ? 3 : 1}
          onClick={expand}
          placeholder="Take a note..."
          onChange={handleChange}
          value={note.content}
        ></textarea>

        {noteToEdit === null ? (
          <Fab type="submit" color="primary">
            <AddIcon />
          </Fab>
        ) : (
          <Fab type="submit" color="secondary">
            <EditNoteIcon />
          </Fab>
        )}
      </form>

      <ToastAlert
        severity="info"
        showToast={showToast}
        toastOn={toastOn}
        toastOff={toastOff}
        duration={6000}
        message="You can't add empty notes 😅"
      />
    </div>
  );
}

export default CreateArea;
