import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/">
                        <i className="fas faCampground fa-lg">
                        <FontAwesomeIcon icon={faCampground} />
                        </i>
                    </Link>
                    <div className="nav-title">LongTrails</div> 
                </div>
                <div className="links">
                    <div className="link">LinkedIn</div>
                    <div className="link">GitHub</div>
                    {/* <div className="link"></div> */}

                </div>
                
            </div>
        </footer>
    )
}

export default Footer; 