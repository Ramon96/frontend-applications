import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DrawingBoard from '../DrawingBoard';
import ObjectDescription from '../ObjectDescription';

class doodle extends Component {
    render() {
        return (
            <div>
                <DrawingBoard/>
                <ObjectDescription />
                    <Link to='/done'>Klaar!</Link>
            </div>
        )
    }
}

export default doodle;