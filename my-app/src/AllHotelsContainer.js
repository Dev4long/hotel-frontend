import React from 'react';
import HotelCard from './HotelCard'

class AllHotelsContainer extends React.Component{

    
  
  
  
    render() {
    
    
      return (
      <div>
          {this.props.hotels.map(hotels => {return <HotelCard hotels={hotels} key={hotels.id} addRoom={this.props.addRoom} clientObject={this.props.clientObject}/>})}
           
      </div>
    )
  }
  }
  
  export default  AllHotelsContainer;
  