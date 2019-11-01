import React, { Component } from 'react'


class home extends Component {
    render() {
        return (
            <div>
                <div id="uitgelicht">
                    <h2>Uitgelicht</h2>
                    <img href={require('../../img/mask.jpg')} alt="A beautifull Mask" />
                    <p>
                        Masker <br />
                        Tara (10)
                    </p>
                </div>
            </div>
        )
    }
}

export default home;