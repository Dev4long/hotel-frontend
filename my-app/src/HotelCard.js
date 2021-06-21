import React from 'react';


class HotelCard extends React.Component{

    
    // hotelRooms = () => {
    //     this.state.hotels.id = this.state.allRooms.all_hotel_id ?  <RoomContainer /> : null
    //   }
  
  
    render() {
    
    
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
         <h5>Rating:{this.props.hotels.rating}</h5>
         <button>Check this hotels availabile rooms</button>


      </div>
    )
  }
  }
  
  export default  HotelCard;
  