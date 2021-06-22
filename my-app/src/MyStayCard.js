import React from 'react';


class MyStayCard extends React.Component{

    
  
  
  
    render() {
    
    
      return (
      <div>
         <h3>{this.props.stays.start_date}</h3>
         <h3>{this.props.stays.end_date}</h3>
        
      </div>
    )
  }
  }
  
  export default  MyStayCard;
  