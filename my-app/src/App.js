import './App.css';
import React from 'react';
import AllHotelsContainer from './AllHotelsContainer';
import LoginForm from './LoginForm';
import MyRoomsContainer from './MyRoomsContainer';

class App extends React.Component{

 
  state = {
    hotels: [],
    myRooms: [],
    clientObject: [],
    showMyRooms: false,
    stays: [],
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/all_hotels')
    .then(res => res.json())
    .then(hotels => this.setState({
      hotels: hotels
    })
    )
  }
    
    deleteRoom = (roomID) => {
    let deletedRoomsArr = this.state.myRooms.filter(room => room.id !== roomID)

    fetch(`http://localhost:3000/api/v1/rooms/${roomID}`,{
    method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
    this.setState({
     myRooms: deletedRoomsArr})
     alert("Room successfully deleted")
    })
   }
  
  

  

  
  
  clientLogin = (clientObj) => {
    this.setState({myRooms: clientObj.rooms})
    this.setState({clientObject: clientObj})
    this.setState({stays: clientObj.stays})
    console.log(this.state.clientObject)
    console.log(this.state.myRooms)
    }
 
    logOut = () => {
      this.setState({clientObject: []})
      this.setState({mySessions: []})
    }


  handleShowMyRooms = () => {
    this.setState({showMyRooms: !this.state.showMyRooms})
  }

  addRoom = (roomObj) => {
    let newRoomArray = [...this.state.myRooms,roomObj.room]
    this.setState({myRooms: newRoomArray})
    let newStayArray = [...this.state.stays,roomObj]
    this.setState({stays: newStayArray})
    // console.log(newStayArray)
  }

  render() {
  
   console.log(this.state.myRooms)
   console.log(this.state.stays)
  
    return (
    <div>
    {this.state.clientObject.id > 0 ? <button onClick={this.logOut}>Logout</button>: null}
    <br></br>
    {this.state.clientObject.id > 0 ? <button onClick={this.handleShowMyRooms}>Display my rooms</button>: null}
    {this.state.clientObject.id > 0 ?  null :<LoginForm clientLogin={this.clientLogin} clientObject={this.state.clientObject}/>}
    {this.state.showMyRooms ? <MyRoomsContainer  myRooms={this.state.myRooms} clientObject={this.state.clientObject} stays={this.state.stays} deleteRoom={this.deleteRoom}/> : null}
    <h1>Pick Your Hotel</h1>
    <AllHotelsContainer clientObject={this.state.clientObject} addRoom={this.addRoom} hotels={this.state.hotels} myRooms={this.state.myRooms} />
    </div>
    );
  }
}

export default App;
