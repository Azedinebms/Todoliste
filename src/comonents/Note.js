import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = props => {

    const handleClick = () => {
        props.onDelet(props.id)
    }


    return (
        <div className='note' id={props.id}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;
