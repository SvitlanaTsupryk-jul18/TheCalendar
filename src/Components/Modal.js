import React from 'react';


const Modal = ({ eventValue, changeValue, addEvent, cancelAdding }) => (
    <div className="modal">
        <h2>Add event?</h2>
        <input placeholder="add event" autoFocus={true} onChange={changeValue} event={eventValue}></input>
        <div>
            <button type="button" onClick={addEvent}>add</button>
            <button type="button" onClick={cancelAdding}>cancel</button>
        </div>
    </div>
);

export default Modal;