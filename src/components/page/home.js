import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import startImage from '../../img/DoodleStart.png';

class home extends Component {
    render() {
        return (
            <div>
                <Link className="imgButton" to="/doodle">
                    <img src={startImage} alt="Begin met tekenen knop" />
                    <p>Begin lekker met tekenen</p>
                </Link>
            </div>
        )
    }
}

export default home;