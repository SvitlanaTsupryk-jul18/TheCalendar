import React from 'react';


const Calendar = ({ month, firstday, lastday, items }) => (

    <div className="calendar">
        <div className="calendar__day">ПН</div>
        <div className="calendar__day">ВТ</div>
        <div className="calendar__day">СР</div>
        <div className="calendar__day">ЧТ</div>
        <div className="calendar__day">ПТ</div>
        <div className="calendar__day">СБ</div>
        <div className="calendar__day">ВС</div>
        {console.log(items, month)}
        {items.map(item => (
            <div className="calendar__day">{item.id}</div>
        ))
        }
    </div>
);


export default Calendar;