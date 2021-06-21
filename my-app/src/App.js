import './App.css';
import React from 'react';
import AllHotelsContainer from './AllHotelsContainer';
import RoomContainer from './RoomContainer';

class App extends React.Component{

 
  state = {
    hotels: [],
    allRooms: []
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/all_hotels')
    .then(res => res.json())
    .then(hotels => this.setState({
      hotels: hotels})
    )

    fetch('http://localhost:3000/api/v1/rooms')
    .then(res => res.json())
    .then(rooms => this.setState({
      allRooms: rooms})
    )
  }

  
   
 
  



  render() {
  
   
  
    return (
    <div>
    <h1>Pick Your Hotel</h1>
    <AllHotelsContainer hotels={this.state.hotels} />
    <RoomContainer allRooms={this.state.allRooms}/>
    </div>
  )
   
}
}

export default App;
