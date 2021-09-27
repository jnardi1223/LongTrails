import React from 'react'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render () {
        return (
            <div>
                 <h1>Welcome To Long Trails!</h1>
                 <Link className="btn" type="button" to="/signin">Sign In</Link>
                 <br/>
                 <Link className="btn" type="button" to="/signup">Sign Up</Link>
            </div>
          
        )
    }
}

export default Home; 