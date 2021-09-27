import { connect } from 'react-redux';
import { signUp } from '../../actions/session'; 
import SignUp from './signup'; 


const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(signUp(user))
}); 


export default connect(null, mapDispatchToProps)(SignUp); 
    
