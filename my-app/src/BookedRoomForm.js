import React, { useState }  from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function BookedRoomForm(props) {
    let [selectedDate1, setSelectedDate1] = useState(null);
    let [selectedDate2, setSelectedDate2] = useState(null);
    
    // let handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch('http://localhost:3000/stays', {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "Application/json"
    //       },
    //       body: JSON.stringify({
            
    //       })
    //     })
    //       .then(res => res.json())
    //       .then(newSession => {
    //         props.addSession(newSession)
    //         console.log(newSession)
    //         setDescription("")
    //         setSelectedDate("")
    //         onChange("")
    //         setDurationPrice("")
    //         alert("Session booked! Happy Training.")
    //       })
    // }
  
     return (
      <div>
          <form>
       <strong>Select a start date:</strong>
            <DatePicker 
            selected={selectedDate1}
            onChange={date => setSelectedDate1(date)}
            minDate={new Date()}
            isClearable
            />
            <br/>
            <strong>Select a end date:</strong>
            <br></br>
            <DatePicker 
            selected={selectedDate2}
            onChange={date => setSelectedDate2(date)}
            minDate={new Date()}
            isClearable
            />
            <br></br>
             <input 
                type="submit" 
                name="submit" 
                value="Book a this room" 
                className="submit"
            />
            
            </form>
      </div>
    )
  
  }
  
  export default BookedRoomForm;