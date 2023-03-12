import { Fab } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';


const CreateArea = props => {

    const initialState={
        title:"",
        content:""
    }

    const [isExpanded, setIsExpanded] = useState(false);

    const [note, setNote] = useState(initialState);

    const handleChange = e => {

        const { name, value } = e.target;

        setNote(prevNote => {
                return{
                    ...prevNote,
                    [name]:value
                }
        });
    }

    const submitNote = e => {
        props.onAdd(note);
        setNote({
            title: "",
            content:""
        })
        e.preventDefault();
    }

    const Expanded = () =>{
        setIsExpanded(true);
    }

    return (
        <div>
          <form className="create-note">
            {isExpanded && (
            <input 
                type="text" 
                name="title" 
                placeholder='Title' 
                onChange={handleChange}
                value={note.title}
            />)}
            <textarea 
                name="content" 
                rows={isExpanded ? 3 : 1}
                onClick={Expanded}
                placeholder='Take a note' 
                onChange={handleChange}
                value={note.content}
                
            />
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
          </form>
        </div>
    );
}

export default CreateArea;
