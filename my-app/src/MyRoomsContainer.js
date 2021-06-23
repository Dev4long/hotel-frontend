import React from 'react';
import MyRoomCard from './MyRoomCard'



class MyRoomsContainer extends React.Component{

    
 
  
  
    render() {
    
     console.log(this.props.myRooms)
     console.log(this.props.stays)
    
      return (
      <div>
         {this.props.myRooms.length <= 0 ? <h2 className="rooms">No current booked rooms</h2> : <h2 className="rooms">Your booked room details</h2>}
          
         {this.props.myRooms.map(room => {return <MyRoomCard room={room} key={room.id} stays={this.props.stays}/>})}
         {/* {this.props.myRooms.stays.map(stays => {return <MyStayCard stays={stays} key={stays.id} />})} */}
         
         {/* {this.props.myRooms.stays.map(stays => {return <MyStayCard stays={stays} key={stays.id} stays={this.props.stays}/>})} */}

          {/* {this.props.myRooms.map(rooms => {return <MyRoomCard rooms={rooms} key={rooms.id} stays={this.props.stays}/>})} */}
      </div>
    )
  }
  }
  
  export default  MyRoomsContainer;
  