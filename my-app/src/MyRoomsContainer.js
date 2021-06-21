import React from 'react';
import MyRoomCard from './MyRoomCard'

class MyRoomsContainer extends React.Component{

    
  
  
  
    render() {
    
    
      return (
      <div>
         {this.props.myRooms.length <= 0 ? <h2 className="rooms">No current booked rooms</h2> : <h2 className="rooms">Your booked room details</h2>}
          
          {this.props.myRooms.map(rooms => {return <MyRoomCard rooms={rooms} key={rooms.id}/>})}
      </div>
    )
  }
  }
  
  export default  MyRoomsContainer;
  