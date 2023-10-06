import { useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import styles from './Note.module.css';
import { type INote } from '../../interfaces/Note';
import UIDialog from '../Dialog/UIDialog';

interface NoteProps {
  note: INote;
  onDelete: (id: string) => void;
  onEdit: (preNote: INote) => void;
}

function Note({ note, onDelete, onEdit }: NoteProps) {
  const [open, setOpen] = useState(false);

  // Open Confirm modal of deleting a note
  const handleDeleteOpen = () => {
    setOpen(true);
  };

  const handleDeleteClose = () => {
    setOpen(false);
  };

  const handleDeleteConfirm = () => {
    onDelete(note.id);
  };

  // We pass the note to edit to the parent component
  const handleEdit = () => {
    onEdit(note);
  };

  return (
    <div className={styles.note}>
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>

      <div className={styles.buttons}>
        <IconButton
          className="edit"
          onClick={handleEdit}
          size="small"
          color="primary"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          className="delete"
          onClick={handleDeleteOpen}
          size="small"
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      </div>

      <UIDialog
        open={open}
        handleClose={handleDeleteClose}
        handleConfirm={handleDeleteConfirm}
        title="Are you sure you want to delete this note?"
        content="Once you delete a note you can't recover it."
      />
    </div>
  );
}

export default Note;
