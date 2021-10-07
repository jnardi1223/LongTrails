import React from 'react'; 
import { Link } from 'react-router-dom';

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

    renderErrors() {
        return (
            <ul>
                  {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
        )
    }

    componentWillUnmount() {
        this.props.reset();
    }

    
    render() {
        return (
            <div className="sign-up-page">
                    <div className="session-form">
                        <form onSubmit={this.handleSubmit}>
                        <h2>{this.props.formType}</h2>
                            <label>First Name
                                <input className="text-field"
                                    type="text" 
                                    value={this.state.first_name} 
                                    onChange={this.handleInput("first_name")}
                                />
                            </label>
                            <br/>
                            <label>Last Name
                                <input className="text-field"
                                    type="text" 
                                    value={this.state.last_name} 
                                    onChange={this.handleInput("last_name")}
                                />
                            </label>
                                <br/>
                            <label>Email
                                <input className="text-field"
                                    type="email" 
                                    value={this.state.email} 
                                    onChange={this.handleInput("email")}
                                />
                            </label>
                                <br/>
                            <label>Password
                                <input className="text-field"
                                    type="password" 
                                    value={this.state.password} 
                                    onChange={this.handleInput("password")}
                                />
                            </label>
                            <br/>
                            <br/>
                            <button className="prime">Submit</button>
                            
                            {this.renderErrors()}
                        <p>Already have an account?<Link className="inline-link" to="/signin"> Sign In</Link></p>
                        </form>
                </div>
             </div>
            )
    }
}

export default SignUp;