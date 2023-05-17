import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Stylee.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
 

const Calandar = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    const handleStartDateChange = (date) => {
      setStartDate(date);
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
    };
  
    return (
      <div>
        <div className='one'>
          <CalendarMonthIcon style={{color:"#14bc9a"}}/>
        
        {/* <label className='frm'>From:</label> */}
        <DatePicker className='from'
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText='DD/MM/YYYY'
        ></DatePicker>
        
        </div>
        {/* <label className='too'>To:</label> */}
        <div className='two'>
        <CalendarMonthIcon style={{color:"#14bc9a"}}/>
        <DatePicker className='to'
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText='DD/MM/YYYY'
          
        />
        </div>
      </div>
    );
  };
  
  export default Calandar;