import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



export default class Opening extends React.Component {
    render() {
        return (
            <div className="greatness">
            <h1 className={"openingTitle"}>Hotel Flatiron</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Link to="/login">
                    <Button>Login / Signup</Button>
                </Link>
                <br></br>
                <br></br>
                {/* <Link to= "/signup">
                <Button class="btn btn-primary mr-1">Signup</Button>
                </Link> */}
                <br></br>
                <br></br>
                <Link to="/hotels">
                    <Button>Check Hotels</Button>
                </Link>
                {/* <Link to= "/sorter">
                <Button>LoginForm</Button>
                </Link> */}
            </div>
        )
    }
}