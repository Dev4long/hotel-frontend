const Login = (props) => {

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
    
    


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={(e) => props.login(e)}>
                <label>UserName</label>
                <input name="username" type="text" />
                <label>Password</label>
                <input name="password" type="password" />
                <input type="submit" />
            </form>
        </div>
    )
    
}

export default Login
