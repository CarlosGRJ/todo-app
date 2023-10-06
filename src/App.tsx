import styles from './App.module.css';
import './index.css';
import CreateArea from './components/CreateArea/CreateArea';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import useNote from './hooks/useNote';
import NotesList from './components/NotesList/NotesList';

function App() {
  const { notes, addNote, deleteNote, noteToEdit, note, editNote } = useNote();

  return (
    <div className={styles['main-container']}>
      <Header />
      <div className={styles['main-subcontainer']}>
        <main>
          <CreateArea onAdd={addNote} noteToEdit={note} onEdit={editNote} />
          <NotesList
            notes={notes}
            deleteNote={deleteNote}
            editNote={noteToEdit}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
