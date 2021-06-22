import React from 'react';
import MyStayCard from './MyStayCard'


class MyRoomCard extends React.Component{

    
  
  
  
    render() {
    
    
      return (
      <div>
         <h2>Rooms</h2>
         <h3>{this.props.rooms.name}</h3>
         <br></br>
         <img alt="rooms" src={this.props.rooms.image}/>
         
         <br></br>
         <h5>costs {this.props.rooms.price}$ per night</h5>

         <h5>Room availabiltiy {this.props.rooms.availability ? "✅":"❌"}</h5>
         
         <h4>Ammenities offered with this room package:</h4>
        
         <h5>Room Service:{this.props.rooms.room_service ? "✅":"❌"}</h5>
        
         <h5>Fitness center:{this.props.rooms.fitness_center ? "✅":"❌"}</h5>
        
         <h5>Pool: {this.props.rooms.pool ? "✅":"❌"}</h5>
         
         <h5>Wifi premium:{this.props.rooms.wifi ? "✅":"❌"}</h5>
        
         <h5>Balcony:{this.props.rooms.balcony ? "✅": "❌"}</h5>
        
         <h5>{this.props.rooms.bed_size} sized bed</h5>
        
      </div>
    )
  }
  }
  
  export default  MyRoomCard;
  