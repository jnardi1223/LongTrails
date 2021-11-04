import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SearchResults from '../search/search_results';
import { Link } from "react-router-dom";

class SubNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            focus: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    update() {
        return (e) => {
            this.setState({ query: e.target.value }, this.handleSubmit)
        }
    }

    handleFocus() {
        this.setState({ focus: true })
    }

    handleBlur() {
        this.setState({ focus: false })
    }

    handleSubmit(e) {
        this.props.fetchSearchResults(this.state.query)
    }



    render() {

        const { results, park} = this.props

        return (
            <>
            <div className="sub-nav">
                <div className="breadcrumbs">
                    <p>United States</p>   {">"}
                    <p>{park.state}</p>  {">"}
                    <p><Link to={`/park/${park.id}`}>{park.park_name}</Link></p>
                </div>
                <div className="sub-search-bar" onFocus={this.handleFocus} onBlur={this.handleBlur}>
                    <form onSubmit={this.handleSubmit} className="sub-search-input">
                        <input type="text" placeholder="Enter a park or trail name" onChange={this.update()} />
                        <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                    </form>
                        {(this.state.query !== "") ? (
                            <SearchResults parent="sub" results={results} query={this.state.query} fetchSearchResults={this.props.fetchSearchResults} />
                            ) : null}
                </div>
            </div>

            </>
           

        )
    }
}

export default SubNav


