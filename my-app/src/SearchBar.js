import React, { Component } from "react";




class SearchBar extends Component {


    render() {
    
        return (
            <div className="sorter">
            
            <br></br>
           <strong>Sort by:</strong>
            <label>
            <input type="radio" value="Alphabetically" 
            checked={this.props.sortedType === "Alphabetically"  ? true : false} 
            onChange={(e) => this.props.sortRatings(e.target.value)}/>
            Alphabetically
            </label>
            <label>
            <input type="radio" value="Rating" 
             checked={this.props.sortedType === "Rating" ? true : false} 
            onChange={(e) => this.props.sortRatings(e.target.value)}/>
            Rating
            </label>
            <br/>

            </div>
        )
    }




}




export default SearchBar