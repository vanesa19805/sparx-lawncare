
// import React, { useState } from "react";
// import { render } from "react-dom";
// import Calendar from 'react-calendar';
// import Calendar from "./components/Calendar";

// const ReactCalender = () => {
//     const [date, setDate] = useState(new Date());
    
//     const onChange = () => {
//         setDate(date);
//     };

//     return (
//     <div>
//         <Calendar onChange={onChange} value={date} />
//         {console.log(date)}
//         </div>
//     );
// };

// render(<ReactCalender />, document.querySelector("#root"));
   

// export default Calendar;
import React from 'react';

const Calendly = () => {
    return (
        <div style={ {height: "800px"} }>
            <iframe
                src="https://calendly.com/stephaniemurphy588"
                width={"100%"}
                height={"100%"}
                frameBorder={"0"}
            />
        </div>
);
}
export default Calendly;
