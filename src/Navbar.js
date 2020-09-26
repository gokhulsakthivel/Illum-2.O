import React, { Component } from 'react'
import './Navbar.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import TwitterIcon from '@material-ui/icons/Twitter';

export class Navabar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar__title MINIMAL-WHITE-SERIES-3-rgba">
                    <h3>Illum</h3>
                    <Brightness6Icon className="navbar__icon"/>
                </div>
                <div className="navbar__socialMedia MINIMAL-WHITE-SERIES-4-rgba">
                    <div className="navbar__socialIcon">
                        <InstagramIcon className="navbar__icon"/>
                    </div>
                    <div className="navbar__socialIcon">
                        <FacebookIcon className="navbar__icon"/>
                    </div>
                    <div className="navbar__socialIcon">
                        <TwitterIcon className="navbar__icon"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navabar
