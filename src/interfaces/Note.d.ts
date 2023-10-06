export interface INote {
  id: string;
  title: string;
  content: string;
}
export type IEditNote = Omit<INote, 'id'>;
