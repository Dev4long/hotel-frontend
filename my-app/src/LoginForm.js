import React, { Component } from "react";




class LoginForm extends Component {

    state = {
        loginName:"",
        registerName:"",
        registerAge: null
    }

    // handleRegister = (e) => {
    //     e.preventDefault()
    //     fetch('http://localhost:3000/users', {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "Application/json"
    //       },
    //       body: JSON.stringify({
    //        name: this.state.registerName,
    //       })
    //  })
    //       .then(
    //          this.setState({registerName:""}),
    //          alert("You've just embarked on your journey to GREATNESS!!!")
    //       )

          
    // }
    
        
    handleLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/users')
          .then(res => res.json())
          .then(users => 
               users.find(user =>  user.username === this.state.loginName ? this.props.clientLogin(user) : null)
              )
              
    }

    
 

    render() {
       
        
     return(
        <div>
        <h4>Already a member?</h4>
        <form onSubmit={this.handleLogin}>
        <input onChange={(e)=> this.setState({loginName: e.target.value})}
        placeholder="enter your name"
        />
        <input 
                type="submit" 
                name="submit" 
                value="Login" 
                className="submit"
                
            />
        </form>
        <br></br>
        <h4>Get registered</h4>
        <form onSubmit={this.handleRegister}>
        <input onChange={(e)=> this.setState({registerName: e.target.value})}
        placeholder="enter your name"
        />
        <input 
                type="submit" 
                name="submit" 
                value="Register as new client" 
                className="submit"
                class="btn btn-primary mr-1"
            />
        </form>
        <br></br>
        </div>
     )
     
    }

}




export default LoginForm