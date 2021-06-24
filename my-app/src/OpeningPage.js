import React from 'react';
import { Link } from 'react-router-dom'



export default class Opening extends React.Component {
    render(){
        return (
            <div className="greatness">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Link to= "/login">
                <button>LogIn</button>
                </Link>
                <br></br>
                <br></br>
                <Link to= "/signup">
                <button class="btn btn-primary mr-1">Signup</button>
                </Link>
                <br></br>
                <br></br>
                <Link to= "/hotels">
                <button>Check hotels</button>
                </Link>
                {/* <Link to= "/sorter">
                <button>LoginForm</button>
                </Link> */}
            </div>
        )
    }
}