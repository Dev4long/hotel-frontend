import React from 'react';
import { Button, Alert, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


class MyRoomCard extends React.Component {




  // .map(stay => stay.id))
  render() {



    let staysObject = (this.props.stays.filter(stay => stay.room_id === this.props.room.id))
    let staysObject1 = (this.props.stays.filter(stay => stay.room_id === this.props.room.id))
    // <h3>{stays.start_date}</h3>
    //    <h3>{stays.end_date}</h3>
    // console.log(staysObject[0].end_date)
    // console.log(this.props.room)
    // console.log(staysObject)


    console.log("hello", this.props.stays)
    console.log("good", staysObject)
    // console.log(staysObject1)

    // {staysObject1[0].start_date.slice(0, 10)}
    // {staysObject1[0].end_date.slice(0, 10)}
    return (

      <div>
        <Card className="card" style={{ color: "#000", background: "white" }}>


          <Card.Img alt="rooms" src={this.props.room.image} />
          <Card.Body>
            <Card.Title>{this.props.room.name}</Card.Title>
            <Card.Text>Start date: {staysObject1.map(stay => stay.start_date.slice(0, 10))} </Card.Text>
            <Card.Text>End date: {staysObject1.map(stay => stay.end_date.slice(0, 10))} </Card.Text>


            <Card.Text>costs {this.props.room.price}$ per night</Card.Text>

            <Card.Text>Room availabiltiy {this.props.room.availability ? "✅" : "❌"}</Card.Text>

            <Card.Title>Ammenities offered with this room package:</Card.Title>

            <Card.Text>Room Service:{this.props.room.room_service ? "✅" : "❌"}</Card.Text>

            <Card.Text>Fitness center:{this.props.room.fitness_center ? "✅" : "❌"}</Card.Text>

            <Card.Text>Pool: {this.props.room.pool ? "✅" : "❌"}</Card.Text>

            <Card.Text>Wifi premium:{this.props.room.wifi ? "✅" : "❌"}</Card.Text>

            <Card.Text>Balcony:{this.props.room.balcony ? "✅" : "❌"}</Card.Text>

            <Card.Text>{this.props.room.bed_size} sized bed</Card.Text>
            <Button onClick={() => this.props.deleteStay(staysObject)}>Delete this Room</Button>
          </Card.Body>
        </Card>
        {/* onClick={() => this.props.deleteRoom(this.props.room.id) */}
      </div>
    )
  }
}

export default MyRoomCard;
