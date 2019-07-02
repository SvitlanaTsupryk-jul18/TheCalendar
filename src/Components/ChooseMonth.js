import React from 'react';


const ChooseMonth = () => (
    <div onClick={(event) => { console.log(event.target.value) }}>
        <button type="button" value="prev" className="btn btn--prev" >prev</button>
        <button type="button" value="now" className="btn btn--now">today</button>
        <button type="button" value="next" className="btn btn--next">></button>
    </div>

);

export default ChooseMonth;