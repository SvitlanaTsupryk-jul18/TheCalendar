import React from 'react';


const Calendar = ({ items, showModal }) => (

    <div className="calendar" onClick={showModal}>
        <div className="calendar__day">ПН</div>
        <div className="calendar__day">ВТ</div>
        <div className="calendar__day">СР</div>
        <div className="calendar__day">ЧТ</div>
        <div className="calendar__day">ПТ</div>
        <div className="calendar__day">СБ</div>
        <div className="calendar__day">ВС</div>

        {items.map((item, index) => (
            <div className="calendar__day" key={index}>
                {item.day}
                <br />{item.todos}
            </div>
        ))}
    </div>
);


export default Calendar;