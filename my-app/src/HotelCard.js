import React from 'react';
import RoomCard from './RoomCard'


class HotelCard extends React.Component{

    state = {
       rooms: this.props.hotels.rooms,
       showRooms: false
    }

    handleShowRoom = () => {
        this.setState({
            showRooms: !this.state.showRooms
        })
    }
    
    // changeRoom = () => {
    //     this.setState({
    //         showRooms: !
    //     })
    // }
  
  
    render() {
        // console.log(this.props.hotels.rooms)
    
      return (
      <div>
         <h3>{this.props.hotels.name}</h3>
         <br></br>
         <img alt="Hotel" src={this.props.hotels.image}/>
         <br></br>
         <h5>{this.props.hotels.description}</h5>
         <br></br>
         <h5>{this.props.hotels.address}</h5>
         <br></br>
         <h5>Rating:{this.props.hotels.rating}⭐</h5>
         {/* {this.state.rooms.map(rooms => {return <RoomCard rooms={rooms} key={rooms.id}/>})} */}
         <button onClick={() => this.handleShowRoom()}>Check this hotels rooms</button>
         {this.state.showRooms ? this.state.rooms.map(rooms => {return <RoomCard rooms={rooms} key={rooms.id} addRoom={this.props.addRoom} clientObject={this.props.clientObject} />}) : null}

      </div>
    )
  }
  }
  
  export default  HotelCard;
  