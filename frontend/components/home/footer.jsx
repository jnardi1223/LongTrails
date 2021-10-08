import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/">
                        <i className="fas-faCampground-fa-lg">
                        <FontAwesomeIcon icon={faCampground} />
                        </i>
                    </Link>
                    <div className="nav-title">LongTrails</div> 
                </div>
                <div className="links">
                    <a href="https://github.com/jnardi1223" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/jim-nardi-3355a11a0/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer; 