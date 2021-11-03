import { connect } from "react-redux";
import SearchBar from "./searchbar";
import { fetchSearchResults, clearSearchResults } from "../../actions/search_actions";


const mapStateToProps = (state) => {
    return {
        results: state.search
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearSearchResults: () => dispatch(clearSearchResults()),
        fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)