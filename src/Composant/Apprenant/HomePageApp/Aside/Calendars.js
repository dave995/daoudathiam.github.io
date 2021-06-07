import React, {  useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendars = () => {
    const [value, onChange] = useState(new Date());
    return(
        <div>
            <h6>Day</h6>
            <div className="d-flex justify-content-center">
            <Calendar
                onChange={onChange}
                value={value}
            />
            </div>
        </div>
    )
}

export default Calendars;