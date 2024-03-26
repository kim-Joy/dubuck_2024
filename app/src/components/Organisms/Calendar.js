import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Calendar from 'react-calendar';
import moment from "moment"

function CalendarForm() {


  return(
     <div className="calendar-form">
      <button
        type="button"
        className="calendar-btn-today"
      >오늘</button>
      <Calendar 
        calendarType="gregory"
        view="month"
        next2Label={null}
        prev2Label={null}
        navigationLabel={null}
        showNeighboringMonth={false}
        minDetail="month"
        formatDay={(locale, date) => moment(date).format("D")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
      
      />
     </div>
  )
}





export default CalendarForm;