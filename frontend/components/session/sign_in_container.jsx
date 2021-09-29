import { connect } from 'react-redux';
import { signIn } from '../../actions/session'; 
import SignIn from './sign_in_form'; 


const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: "Sign In"
})

const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(signIn(user))
}); 


export default connect(mapStateToProps, mapDispatchToProps)(SignIn); 
    