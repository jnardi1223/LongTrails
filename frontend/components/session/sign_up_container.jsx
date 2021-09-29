import { connect } from 'react-redux';
import { signIn, signUp, reset } from '../../actions/session'; 
import SignUp from './sign_up_form'; 


const mapStateToProps = ({errors}) => ({
    errors: errors.sessionErrors, 
    formType: "Sign Up"
})

const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(signUp(user)),
    signIn: user => dispatch(signIn(user)),
    reset: () => dispatch(reset())
}); 


export default connect(mapStateToProps, mapDispatchToProps)(SignUp); 
    
