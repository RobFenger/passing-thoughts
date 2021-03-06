import React, { useEffect } from 'react';

export function Thought(props) {
  const thought = props.thought;
  const removeThought = props.removeThought;

  //remove thought via removeThought() (app.js)
  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  //effect to call the removeThought() after the time is gone
  useEffect(() => {
  const timeRemaining = thought.expiresAt - Date.now();
  const timeout = setTimeout(() => {
   removeThought(thought.id);
  }, timeRemaining);
  return () => {
    clearTimeout(timeout);
  };
}, [thought, removeThought, thought.expiresAt, thought.id]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}