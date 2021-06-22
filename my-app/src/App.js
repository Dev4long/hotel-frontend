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
    fetch('http://localhost:3000/api/v1/stays')
    .then(res => res.json())
    .then(stays => this.setState({
      stays: stays
    })
    )
  }
  
  
  clientLogin = (clientObj) => {
    this.setState({myRooms: clientObj})
    this.setState({clientObject: clientObj})
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
    let newRoomArray = [...this.state.myRooms.rooms,roomObj]
    this.setState({myRooms: newRoomArray})
    console.log(newRoomArray)
  }

  render() {
  
   
  
    return (
    <div>
    {this.state.clientObject.id > 0 ? <button onClick={this.logOut}>Logout</button>: null}
    <br></br>
    {this.state.clientObject.id > 0 ? <button onClick={this.handleShowMyRooms}>Display my rooms</button>: null}
    {this.state.clientObject.id > 0 ?  null :<LoginForm clientLogin={this.clientLogin} clientObject={this.state.clientObject}/>}
    {this.state.showMyRooms ? <MyRoomsContainer  myRooms={this.state.myRooms} clientObject={this.state.clientObject} /> : null}
    <h1>Pick Your Hotel</h1>
    <AllHotelsContainer clientObject={this.state.clientObject} addRoom={this.addRoom} hotels={this.state.hotels} />
    </div>
  )
   
}
}

export default App;
