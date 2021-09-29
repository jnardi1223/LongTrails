import { connect } from 'react-redux';
import { signIn, reset } from '../../actions/session'; 
import SignIn from './sign_in_form'; 


const mapStateToProps = (state) => ({
    errors: state.errors.sessionErrors,
    formType: "Sign In"
})

const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(signIn(user)),
    reset: () => dispatch(reset())
}); 


export default connect(mapStateToProps, mapDispatchToProps)(SignIn); 
    