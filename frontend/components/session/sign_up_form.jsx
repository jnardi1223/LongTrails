import React from 'react'; 

class SignUp extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            first_name: "", 
            last_name: "", 
            email: "", 
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    // componentDidMount() {
    //     this.props.signUp(this.state)
    // }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.signUp(this.state)
            .then(() => this.props.history.push('/'))
    }
    
    render() {
        return (
            <div className="session-form">
                <h2>{this.props.formType}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>First Name
                            <input 
                                type="text" 
                                value={this.state.first_name} 
                                onChange={this.handleInput("first_name")}
                            />
                        </label>
                        <br/>
                        <label>Last Name
                            <input 
                                type="text" 
                                value={this.state.last_name} 
                                onChange={this.handleInput("last_name")}
                            />
                        </label>
                            <br/>
                        <label>Email
                            <input 
                                type="email" 
                                value={this.state.email} 
                                onChange={this.handleInput("email")}
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
                        <button>Submit</button>
                    </form>
            </div>
        )
    }
}

export default SignUp;