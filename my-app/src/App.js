import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import AllHotelsContainer from './AllHotelsContainer';
import LoginForm from './LoginForm';
import MyRoomsContainer from './MyRoomsContainer';
import Signup from './Signup'
import Login from './Login'

class App extends React.Component {


  state = {
    hotels: [],
    myRooms: [],
    userInfo: [],
    showMyRooms: false,
    stays: [],
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/all_hotels', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })

      .then(res => res.json())
      .then(hotels => this.setState({
        hotels: hotels
      })
      )
  }

  login = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value
      })
    })
      .then(res => res.json())
      .then(userInfo => {
        localStorage.token = userInfo.token
        if (userInfo.token) {
          this.setState({
            userInfo: userInfo.user,
            myRooms: userInfo.user.rooms,
            stays: userInfo.user.stays
          })
          console.log(userInfo.user)
        }
      })
  }

  signup = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value
      })
    })
      .then(res => res.json())
      .then(console.log)
  }

  deleteRoom = (roomID) => {
    let deletedRoomsArr = this.state.myRooms.filter(room => room.id !== roomID)
    fetch(`http://localhost:3000/api/v1/rooms/${roomID}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          myRooms: deletedRoomsArr,
        })
        alert("Room successfully deleted")
      })
  }
  // deleteStay = (stayID) => {
  //   let deletedStaysArr = this.state.stays.filter(stay => stay.id !== stayID)
  //   fetch(`http://localhost:3000/api/v1/stays/${stayID}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Authorization": `Bearer ${localStorage.token}`,
  //       "Content-Type": "application/json"
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(() => {
  //       this.setState({
  //         stays: deletedStaysArr,
  //       })

  //     })
  // }







  // clientLogin = (clientObj) => {
  //   this.setState({ myRooms: clientObj.rooms })
  //   this.setState({ clientObject: clientObj })
  //   this.setState({ stays: clientObj.stays })
  //   console.log(this.state.clientObject)
  //   console.log(this.state.myRooms)
  // }

  // logOut = () => {
  //   this.setState({ clientObject: [] })
  //   this.setState({ mySessions: [] })
  // }


  handleShowMyRooms = () => {
    this.setState({ showMyRooms: !this.state.showMyRooms })
  }

  addRoom = (roomObj) => {
    let newRoomArray = [...this.state.myRooms, roomObj.room]
    this.setState({ myRooms: newRoomArray })
    let newStayArray = [...this.state.stays, roomObj]
    this.setState({ stays: newStayArray })
    console.log(newStayArray)
  }

  logOut = () => {
    localStorage.clear()
  }

  render() {

    //  console.log(this.state.myRooms)
    console.log(this.state.stays)


    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login login={this.login} />
            </Route>
            <Route path="/signup">
              <Signup signup={this.signup} />
            </Route>
          </Switch>
        </BrowserRouter>
        <button onClick={this.logOut}>Logout</button>
        {this.state.userInfo.id > 0 ? <button onClick={this.logOut}>Logout</button> : null}
        <br></br>
        {this.state.userInfo.id > 0 ? <button onClick={this.handleShowMyRooms}>Display my rooms</button> : null}
        {/* {this.state.userInfo.id > 0 ? null : <LoginForm clientLogin={this.clientLogin} clientObject={this.state.clientObject} />} */}
        {this.state.showMyRooms ? <MyRoomsContainer myRooms={this.state.myRooms} userInfo={this.state.userInfo} stays={this.state.stays} deleteRoom={this.deleteRoom} deleteStay={this.deleteStay} /> : null}
        <h1>Pick Your Hotel</h1>
        <AllHotelsContainer userInfo={this.state.userInfo} addRoom={this.addRoom} hotels={this.state.hotels} myRooms={this.state.myRooms} />
      </div>
    );
  }
}

export default App;
