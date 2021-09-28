import { connect } from 'react-redux';
import { signUp } from '../../actions/session'; 
import SignUp from './sign_up_form'; 


const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: "Sign Up"
})

const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(signUp(user))
}); 


export default connect(mapStateToProps, mapDispatchToProps)(SignUp); 
    
