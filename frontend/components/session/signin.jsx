import React from 'react'; 

class SignIn extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            username: "", 
            email: "",
            password: ""
        }; 

        this.handleInput = this.handleInput.bind(this); 
    }

    handleInput(type) {
        return (e) => {
            that.setState({[type]: e.target.value})
        }
    }

    // handleSubmit(e) {
    //     e.preventDefault(); 
    //     this.props.signUp(this.state)
    //         .then( () => this.props.history.push())
    // }
    
    render() {
        return (
            <div>
                <h2>Sign Up!</h2>
                    <form>
                        <label>Username
                            <input 
                                type="text" 
                                value={this.state.username} 
                                onChange={this.handleInput("username")}
                            />
                        </label>
                             <br/>
                        <label>Password
                            <input 
                                type="password" 
                                value={this.state.password} 
                                onChange={this.handleInput("password")}
                            />
                        </label>
                        <br/>
                        <button onClick={this.handleSumit}>Submit</button>
                    </form>
            </div>
        )
    }
}

export default SignIn
