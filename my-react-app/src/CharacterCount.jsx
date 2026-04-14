import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');
  const maxLength = 100; // Optional character limit

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <label htmlFor="char-input">Type something: </label>
      <input
        id="char-input"
        type="text"
        value={text}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder="Start typing..."
      />
      <p>
        Character Count: <strong>{text.length}</strong> / {maxLength}
      </p>
    </div>
  );
}

export default CharacterCounter;
