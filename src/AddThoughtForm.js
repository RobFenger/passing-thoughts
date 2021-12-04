import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  //function to set state to what is typed in the inputfield 
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  //make object with an id, the text from state and expirationtime()
  //pass the object to addThought function(app.js)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length !== 0) {
    const newThought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };
    props.addThought(newThought);
    setText('');
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}