import React from 'react'
import { Link } from "react-router-dom";
import SearchContainer from './search_bar';
import Parks from "../parks/parks_index"


// const Home = ({currentUser}) => {

//     return (
//         <div className="homepage">
//             <div className="homepage-text">
//               Find your next adventure
//               <SearchContainer />

//             </div>
//             <div>
//               {/* <TopTrailsContainer />  */}
//             </div>
//         </div>
//     )
// }

// export default Home;

class Home extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        this.props.receiveAllParks()
    }

    render() {
        if (!this.props.parks) {
            return null
        };
        const {parks} = this.props
        return ( 
            <div>
                <div className="homepage">
                    <div className="homepage-text">
                    Find your next adventure
                    <SearchContainer />
                    </div>
                </div>
                <div>
                    <Parks parks={parks}/> 
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Home;