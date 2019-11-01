import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DrawingBoard from '../DrawingBoard';
import ObjectDescription from '../ObjectDescription';

class doodle extends Component {
    render() {
        return (
            <div className="col2">
                <DrawingBoard/>
                <div>
                    <h2>Omschrijving</h2>
                    <ObjectDescription />
                    <div className="button">Ander Omschrijving</div>
                    <div className="button"><Link to='/done'>Klaar!</Link></div>
                </div> 
            </div>
        )
    }
}

export default doodle;