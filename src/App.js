import { useState } from 'react';
import CreateArea from './comonents/CreateArea';
import Footer from './comonents/Footer';
import Header from './comonents/Header';
import Note from './comonents/Note';

function App() {

  const [notes, setNotes] = useState([]);

  const addNote = newNote => {
    setNotes(prevNotes=>{
      return[...prevNotes, newNote];
    })
    console.log(notes)
  }

  const deletNote = id => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    
  }

  return (
    <div className="App">
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => {
            return(
              <Note 
                  index={index} 
                  id={index} 
                  title={noteItem.title} 
                  content={noteItem.content}
                  onDelet={deletNote}
                  />
            ) 
        }
               
        )}
        <Footer />        
    </div>
  );
}

export default App;
