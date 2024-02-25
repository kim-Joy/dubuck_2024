import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Calendar from 'react-calendar';
import moment from "moment"

function CalendarForm() {

  return(
     <div className="calendar-form">
      <Calendar 
        calendarType="US"
        next2Label={null}
        prev2Label={null} 
        showNeighboringMonth={false}
        formatDay={(locale, date) => moment(date).format("D")}
 
      />
     </div>
  )
}





export default CalendarForm;