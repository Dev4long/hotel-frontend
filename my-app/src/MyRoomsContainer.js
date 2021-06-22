import React from 'react';
import MyRoomCard from './MyRoomCard'
import MyStayCard from './MyStayCard'


class MyRoomsContainer extends React.Component{

    
 
  
  
    render() {
    
     
    
      return (
      <div>
         {this.props.myRooms.length <= 0 ? <h2 className="rooms">No current booked rooms</h2> : <h2 className="rooms">Your booked room details</h2>}
          
         {this.props.myRooms.rooms.map(rooms => {return <MyRoomCard rooms={rooms} key={rooms.id} />})}
         {this.props.myRooms.stays.map(stays => {return <MyStayCard stays={stays} key={stays.id} />})}
         
         {/* {this.props.myRooms.stays.map(stays => {return <MyStayCard stays={stays} key={stays.id} stays={this.props.stays}/>})} */}

          {/* {this.props.myRooms.map(rooms => {return <MyRoomCard rooms={rooms} key={rooms.id} stays={this.props.stays}/>})} */}
      </div>
    )
  }
  }
  
  export default  MyRoomsContainer;
  