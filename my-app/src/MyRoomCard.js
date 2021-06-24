import React from 'react';



class MyRoomCard extends React.Component {





  render() {



    let staysObject = this.props.stays.filter(stay => stay.room_id === this.props.room.id)
    // <h3>{stays.start_date}</h3>
    //    <h3>{stays.end_date}</h3>
    // console.log(staysObject[0].end_date)
    // console.log(this.props.room)

    return (
      <div>
        <h2>Rooms</h2>
        <h3>{this.props.room.name}</h3>
        <br></br>
        <h3>Start date: {staysObject[0].start_date.slice(0, 10)}</h3>
        <h3>End date: {staysObject[0].end_date.slice(0, 10)}</h3>
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
        <button onClick={() => this.props.deleteRoom(this.props.room.id)/*, this.props.deleteStay(this.props.stays.id)*/}>Delete this session</button>

      </div>
    )
  }
}

export default MyRoomCard;
