import { connect } from "react-redux";
import Home from "./home";
import {receiveAllParks} from "../../actions/parks";

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        parks: Object.values(state.entities.parks)  
    };
};

const mapDispatchToProps = dispatch => ({
    receiveAllParks: () => dispatch(receiveAllParks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);