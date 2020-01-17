import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DrawingBoard from '../DrawingBoard';
import ObjectDescription from '../ObjectDescription';
import Masks from '../../img/Maskers.png';
import Clothes from '../../img/Kleding.png';
import Food from '../../img/Voedsel.png';
import Weapons from '../../img/Wapens.png';



class doodle extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            termmaster: ""
        }
    }

    handleClick = (e) => {
        console.log("This is the id :" + e.currentTarget.id)
        switch(e.currentTarget.id){
            case "Masks":
                this.setState({termmaster: "Masks"});
                break;
            case "Clothes":
                this.setState({termmaster: "Clothes"});
                break;
            case "Food":
                this.setState({termmaster: "Food"});
                break;
            case "Weapons":
                this.setState({termmaster: "Weapons"});
                break;
            default:
                    this.setState({termmaster: ""});
                break;
        }

        console.log(this.state.termmaster)


    }

    render() {
        if(this.state.termmaster === ""){
           return (
            <div className="subjectSelection">
                <h2>Kies een onderwerp</h2>
                <div className="imgButton" id="Masks" onClick={this.handleClick}>
                    <img src={Masks} alt="Maskers" />
                    <p>Maskers</p>
                </div>
                <div className="imgButton" id="Clothes" onClick={this.handleClick}>
                    <img src={Clothes} alt="Kleding" />
                    <p>Kleding</p>
                </div>
                <div className="imgButton" id="Food" onClick={this.handleClick}>
                    <img src={Food} alt="Eten" />
                    <p>Eten</p>
                </div>
                <div className="imgButton" id="Weapons" onClick={this.handleClick}>
                    <img src={Weapons} alt="Wapens" />
                    <p>Wapens</p>
                </div>
            </div>
            )
        }
        else {
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
}

export default doodle;