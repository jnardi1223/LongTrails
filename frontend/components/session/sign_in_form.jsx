import React from 'react'; 

class SignIn extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            email: "", 
            password: "",
            errors: []

        }

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    // componentDidMount() {
    //     this.props.signIn(this.state); 
    // }

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

    render() {
        let errors = this.state.errors.map((el, idx) => {
            return <li key={idx}>{el}</li>
        })
        return (
            <div className="session-form">
                <h2>{this.props.formType}</h2>
                    <form onSubmit={this.handleSubmit}>
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
                        {errors}
                        <br/>
                        <button>Submit</button>
                    </form>
            </div>
        )
    }
}

export default SignIn