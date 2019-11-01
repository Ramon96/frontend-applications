import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ObjectImage from '../ObjectImage';
import ObjectDescription from '../ObjectDescription';



class done extends Component {
    render() {
        return (
            <div>
                <h2>Zo zag het eruit!</h2>
                <div className="col2">
                    <ObjectImage/>
                    <ObjectDescription/>
                </div>
                <div className="center">
                    <Link to='/doodle'><div className="button">Maak een nieuwe</div></Link>
                </div>
            </div>
        )
    }
}

export default done;