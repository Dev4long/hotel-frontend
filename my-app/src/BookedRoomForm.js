import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function BookedRoomForm(props) {
  let [selectedDate1, setSelectedDate1] = useState(null);
  let [selectedDate2, setSelectedDate2] = useState(null);

  let handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/stays', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        user_id: props.userInfo.id,
        room_id: props.room.id,
        start_date: selectedDate1,
        end_date: selectedDate2
      })
    })
      .then(res => res.json())
      .then(newRoom => {
        props.addRoom(newRoom)
        setSelectedDate1("")
        setSelectedDate2("")
        alert("Room booked!")
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <strong>Select a start date:</strong>
        <DatePicker
          selected={selectedDate1}
          onChange={date => setSelectedDate1(date)}
          minDate={new Date()}
          isClearable
        />
        <br />
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
          value="Save booked date"
          className="submit"
        />

      </form>
    </div>
  )

}

export default BookedRoomForm;