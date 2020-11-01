import React, {useState} from 'react';
// import {useState} from './StateProvider';

function AddForm() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setValue('');
  };

  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <input placeholder="info"></input>
        {/* <input value={entry.name} placeholder="oyster name"></input>
        <input value={entry.beverage} placeholder="cocktail or beer"></input>
        <input value={entry.restaurant} placeholder="restaurant"></input>
        <input value={entry.comments} placeholder="comments"></input> */}
      </form>
    </div>
  );
}

export default AddForm;
