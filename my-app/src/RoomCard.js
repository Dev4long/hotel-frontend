import React from 'react';
import BookedRoomForm from './BookedRoomForm'
import { Button, Alert, Card, Grid, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class RoomCard extends React.Component {

  state = {
    // bookedRooms: [],
    roomForm: false
  }


  handleRoomForm = () => {
    this.setState({
      roomForm: !this.state.roomForm
    })
  }


  render() {
    console.log(this.props.userInfo)

    // let RoomObject = this.props.myRooms.filter(room  => room.id === this.props.rooms.id)

    // console.log(RoomObject)
    return (
      <div>
      <Card className="roomCard" style={{ color: "#000", background: "white" }}>
        <Card.Title>{this.props.rooms.name}</Card.Title>
        <Card.Img style={{height: "60%", width: "100%"}} className={"roomImg"} alt="rooms" src={this.props.rooms.image} />
        <Card.Body>
        
        
        <Card.Text>${this.props.rooms.price} per night</Card.Text>

        <Card.Text>Available? {this.props.rooms.availability ? "✅" : "❌"}</Card.Text>

        <Card.Title>Ammenities offered with this room package:</Card.Title>

        <Card.Text>Room Service:{this.props.rooms.room_service ? "✅" : "❌"}</Card.Text>

        <Card.Text>Fitness center:{this.props.rooms.fitness_center ? "✅" : "❌"}</Card.Text>

        <Card.Text>Pool: {this.props.rooms.pool ? "✅" : "❌"}</Card.Text>

        <Card.Text>Wifi premium:{this.props.rooms.wifi ? "✅" : "❌"}</Card.Text>

        <Card.Text>Balcony:{this.props.rooms.balcony ? "✅" : "❌"}</Card.Text>

        <Card.Text>{this.props.rooms.bed_size} sized bed</Card.Text>
        {this.props.userInfo.id >= 1 ? <Button onClick={this.handleRoomForm}>Book this room</Button> : null}
        {this.state.roomForm ? <BookedRoomForm room={this.props.rooms} addRoom={this.props.addRoom} userInfo={this.props.userInfo} /> : null}
        </Card.Body>
      </Card>


        {/* <input type="checkbox" value={this.props.rooms.availability}></input> */}



      </div>
    )
  }
}

export default RoomCard;


