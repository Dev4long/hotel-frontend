import React from 'react';
import RoomCard from './RoomCard'

class RoomContainer extends React.Component{

     
  
  
  
    render() {
    
      return (
      <div> 
          {this.props.allRooms.map(rooms => {return <RoomCard rooms={rooms} key={rooms.id}/>})}
      </div>
    )
  }
  }
  

  export default RoomContainer;
  