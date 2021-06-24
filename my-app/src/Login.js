import React from 'react';
// import { render } from 'react-dom';



// const LogIn = () => 



class Login extends React.Component {

    // let logIn = (e) => {
    //     e.preventDefault()

    //     fetch("http://localhost:3000/api/v1/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             username: e.target[0].value,
    //             password: e.target[1].value
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(userInfo => {
    //             localStorage.token = userInfo.token
    //             setState({myRooms: userInfo.rooms})
    //             setState({stays: userInfo.stays})
    //             setState({ClientObject: userInfo})
    //             console.log(userInfo.user)
    //             // console.log(this.props.login)
    //         })
    // }
    
    render(){




        let logIn = (e) => {
            e.preventDefault()
    
            fetch("http://localhost:3000/api/v1/login", {
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
                .then(userInfo => {
                    localStorage.token = userInfo.token
                    this.props.myRooms.setState({myRooms: userInfo.user.rooms})
                    this.setState({stays: userInfo.user.stays})
                    this.setState({clientObject: userInfo.user})
                    console.log(userInfo.user)
                    console.log(this.props.myRooms)
                    
                    
                    // console.log(this.props.login)
                })
        }


    return (
        <div>
            <h2>LogIn</h2>
            <form onSubmit={(e) => logIn(e)}>
                <label>UserName</label>
                <input name="username" type="text" />
                <label>Password</label>
                <input name="password" type="password" />
                <input type="submit" />
            </form>
        </div>
    )
    }
}

export default Login;