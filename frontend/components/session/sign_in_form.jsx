import React from 'react'; 
import { Link } from 'react-router-dom';

class SignIn extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            email: "", 
            password: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.demo = this.demo.bind(this); 
    }

    // componentDidMount() {
    //     this.props.signIn(this.state); 
    // }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
        )
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.signIn(this.state)
            .then(() => this.props.history.push('/'))
            .fail(() => this.setState({ errors: this.props.errors }))
        
    }

    demo(e) {
        e.preventDefault();
        const demoUser = { email: "email@demo", password: "123456"};
        this.props.signIn(demoUser);
    }

    componentWillUnmount() {
        this.props.reset();
    }    

    render() {
        return (
            <div className="sign-in-form">
                <div className="session-form">
                    <form onSubmit={this.handleSubmit}>
                        <h2>{this.props.formType}</h2>
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
                            {this.renderErrors()}
                            <br/>
                            <button>Submit</button>
                        <p>Sign up for free! <button className="button"><Link to="/signup">Sign Up</Link></button></p>
                        <p>Just exploring? Hit the trail as a <button onClick={this.demo}>demo user</button></p>
                        </form>
                    
                </div>
            </div>
        )
    }
}

export default SignIn
