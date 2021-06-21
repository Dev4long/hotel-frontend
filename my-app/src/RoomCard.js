import React from 'react';


class RoomCard extends React.Component{

    

    render() {
    

      return (
      <div>
         <h3>{this.props.rooms.name}</h3>
         <br></br>
         <img alt="Hotel" src={this.props.rooms.image}/>
         <br></br>
         <h5>{this.props.rooms.description}</h5>
         <br></br>
         <h5>{this.props.rooms.address}</h5>
         <br></br>
         <h5>Rating:{this.props.rooms.rating}</h5>
         


      </div>
    )
  }
  }
  
  export default  RoomCard;
  