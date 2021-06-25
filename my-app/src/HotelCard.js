import React from 'react';
import RoomCard from './RoomCard'
import { Button, Alert, Card, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class HotelCard extends React.Component {

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
        <Card className="card" style={{ color: "#000", background: "white" }}>

          <Card.Img alt="Hotel" src={this.props.hotels.image} />

          <Card.Body>
            <Card.Title>{this.props.hotels.name}</Card.Title>
            <Card.Text>{this.props.hotels.description}</Card.Text>

            <Card.Text>{this.props.hotels.address}</Card.Text>

            <Card.Text>Rating:{this.props.hotels.rating}⭐</Card.Text>
            {/* {this.state.rooms.map(rooms => {return <RoomCard rooms={rooms} key={rooms.id}/>})} */}
            <Button onClick={() => this.handleShowRoom()}>Check this hotels rooms</Button>
          </Card.Body>
        </Card>
        <Container>
        <Row lg={3}>
        {this.state.showRooms ? this.state.rooms.map(rooms => { return <RoomCard className={"roomCard"} rooms={rooms} key={rooms.id} addRoom={this.props.addRoom} userInfo={this.props.userInfo} myRooms={this.props.myRooms} /> }) : null}
        </Row>
        </Container>

      </div>
    )
  }
}

export default HotelCard;
