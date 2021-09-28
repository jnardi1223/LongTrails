import {connect} from 'react-redux';
import Home from './home';
import { signOut } from '../../actions/session';

const mapStateToProps = (state) => ({
    user: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);