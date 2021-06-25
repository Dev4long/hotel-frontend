import React from 'react';



class MyRoomCard extends React.Component {




  // .map(stay => stay.id))
  render() {



    let staysObject = (this.props.stays.filter(stay => stay.room_id === this.props.room.id))
    let staysObject1 = (this.props.stays.map(stay => stay))
    // <h3>{stays.start_date}</h3>
    //    <h3>{stays.end_date}</h3>
    // console.log(staysObject[0].end_date)
    // console.log(this.props.room)
    // console.log(staysObject)
    
    
    console.log("hello", this.props.stays)
    console.log("good",staysObject)
    // console.log(staysObject1)

    // {staysObject1[0].start_date.slice(0, 10)}
    // {staysObject1[0].end_date.slice(0, 10)}
    return (
      
      <div>
        <h2>Rooms</h2>
        <h3>{this.props.room.name}</h3>
        <br></br>
        <h3>Start date: {staysObject1.start_date} </h3>
        <h3>End date: {staysObject1.end_date} </h3>
        <img alt="rooms" src={this.props.room.image} />

        <br></br>
        <h5>costs {this.props.room.price}$ per night</h5>

        <h5>Room availabiltiy {this.props.room.availability ? "✅" : "❌"}</h5>

        <h4>Ammenities offered with this room package:</h4>

        <h5>Room Service:{this.props.room.room_service ? "✅" : "❌"}</h5>

        <h5>Fitness center:{this.props.room.fitness_center ? "✅" : "❌"}</h5>

        <h5>Pool: {this.props.room.pool ? "✅" : "❌"}</h5>

        <h5>Wifi premium:{this.props.room.wifi ? "✅" : "❌"}</h5>

        <h5>Balcony:{this.props.room.balcony ? "✅" : "❌"}</h5>

        <h5>{this.props.room.bed_size} sized bed</h5>
        <button onClick={() => this.props.deleteStay(staysObject)}>Delete this Room</button>
        {/* onClick={() => this.props.deleteRoom(this.props.room.id) */}
      </div>
    )
  }
}

export default MyRoomCard;
