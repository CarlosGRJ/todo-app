import { type INote } from '../interfaces/Note';

export const saveNotesToStorage = ({ notes }: { notes: INote[] }) => {
  window.localStorage.setItem('notes', JSON.stringify(notes));
};
