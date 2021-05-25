import React from "react";
import Calendar from 'react-calendar'


function Calendar(props) {

    const[vale, onChange] = useState(new Date());

  return (
    <div>

      <Calendar 
      onChange={onChange}
      value={value}
      />

    </div>
    
  );
}

export default Calendar;