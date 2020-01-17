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
            termmaster: "",
            descriptionValue: 0,
            descriptionCeiling: 0
        }
    }

    handleClick = param => e => {
        switch(param){
            case "categoryButton":
                this.setState({termmaster: e.currentTarget.id})
                break;
            case "reroll":
                this.changeDescription();
                break;
            case "back":
                this.setState({termmaster: ""});
                break;
            default:
                this.setState({termmaster: ""});
                break;
        }
    }

    componentDidUpdate(){
        console.log("descriptionValue " + this.state.descriptionValue)
    }

    changeDescription = () => {
        let randomValue = Math.round(Math.random() * (this.state.descriptionCeiling - 0) + 0);
        this.setState({descriptionValue: randomValue})
        console.log("rand " + randomValue + "descV " + this.state.descriptionValue + "ceiling " + this.state.descriptionCeiling)
    }
    //This is necessary to calculate the new value, we dont want a description that doesn't exist, we can update the ceiling depending on the amount of descriptions we can fetch
    //With cealing I mean the maximum available number
    setDescriptionCeiling = (descCeil) =>{
        this.setState({descriptionCeiling: descCeil})
    }

    render() {
        if(this.state.termmaster === ""){
           return (
            <div className="subjectSelection">
                <h2>Kies een onderwerp</h2>
                <div className="imgButton" id="Masks" onClick={this.handleClick('categoryButton')}>
                    <img src={Masks} alt="Maskers" />
                    <p>Maskers</p>
                </div>
                <div className="imgButton" id="Clothes" onClick={this.handleClick('categoryButton')}>
                    <img src={Clothes} alt="Kleding" />
                    <p>Kleding</p>
                </div>
                <div className="imgButton" id="Food" onClick={this.handleClick('categoryButton')}>
                    <img src={Food} alt="Eten" />
                    <p>Eten</p>
                </div>
                <div className="imgButton" id="Weapons" onClick={this.handleClick('categoryButton')}>
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
                    <h2>Omschrijving {this.state.termmaster}</h2>
                    <ObjectDescription desc={this.state.descriptionValue} changeDesc={this.changeDescription} descCeil={this.setDescriptionCeiling} />
                    <div className="button" onClick={this.handleClick('reroll')}>Ander Omschrijving</div>
                    <div className="button"><Link to='/done'>Klaar!</Link></div>
                    <div className="button" id="back" onClick={this.handleClick("back")}>Terug</div>
                </div> 
            </div>
        )
        }
    }
}

export default doodle;