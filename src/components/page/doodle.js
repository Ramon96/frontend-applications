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
            descriptionCeiling: 0,
            state: "choosing"
        }
    }

    handleClick = param => e => {
        switch(param){
            case "categoryButton":
                this.setState({termmaster: e.currentTarget.id});
                this.setState({state: "drawing"});
                break;
            case "reroll":
                this.changeDescription();
                break;
            case "back":
                this.setState({termmaster: ""});
                this.setState({state: "choosing"});

                break;
            case "done":
                this.setState({state: "done"});
                break;
            case "save":
                console.log("ik vuur")
                const canvas = document.getElementById('cfd');
                window.open(canvas.toDataURL('image/png'));
                var gh = canvas.toDataURL('png');
            
                var a  = document.createElement('a');
                a.href = gh;
                a.download = 'Tekening.png';
            
                a.click()
                break;
            default:
                this.setState({termmaster: ""});
                break;
        }
    }


    changeDescription = () => {
        let randomValue = Math.round(Math.random() * (this.state.descriptionCeiling - 0) + 0);
        this.setState({descriptionValue: randomValue})
    }
    //This is necessary to calculate the new value, we dont want a description that doesn't exist, we can update the ceiling depending on the amount of descriptions we can fetch
    //With cealing I mean the maximum available number
    setDescriptionCeiling = (descCeil) =>{
        this.setState({descriptionCeiling: descCeil})
    }



    render() {
        if(this.state.state === "choosing"){
           return (
            <div className="subjectSelection">
                <h2>Kies een onderwerp</h2>
                <div className="imgButton" id="termmaster13440" onClick={this.handleClick('categoryButton')}>
                    <img src={Masks} alt="Maskers" />
                    <p>Maskers</p>
                </div>
                <div className="imgButton" id="termmaster13536" onClick={this.handleClick('categoryButton')}>
                    <img src={Clothes} alt="Kleding" />
                    <p>Kleding</p>
                </div>
                <div className="imgButton" id="termmaster1287" onClick={this.handleClick('categoryButton')}>
                    <img src={Food} alt="Speelgoed" />
                    <p>Speelgoed</p>
                </div>
                <div className="imgButton" id="termmaster12445" onClick={this.handleClick('categoryButton')}>
                    <img src={Weapons} alt="Wapens" />
                    <p>Wapens</p>
                </div>
            </div>
            )
        }
        else if(this.state.state === "drawing"){
        return (
            <div className="col2">
                <DrawingBoard/> 
                 <div className="descriptionSection">
                    <h2>Over het object</h2>
                    <ObjectDescription desc={this.state.descriptionValue} changeDesc={this.changeDescription} descCeil={this.setDescriptionCeiling} term={this.state.termmaster} state={this.state.state}/>
                    <div className="button" onClick={this.handleClick('reroll')}>Ander Omschrijving</div>
                    <div className="button" onClick={this.handleClick('done')}>Klaar</div>
                    {/* <div className="button"><Link to='/done'>Klaar!</Link></div> */}
                    <div className="button" id="back" onClick={this.handleClick("back")}>Terug</div>
                </div> 
            </div>
        )
        }
        else {
            return (
                <div className="col2">
                    <DrawingBoard/> 
                     <div className="descriptionSection">
                        <h2>Zo zag het eruit</h2>
                        <ObjectDescription desc={this.state.descriptionValue} changeDesc={this.changeDescription} descCeil={this.setDescriptionCeiling} term={this.state.termmaster} state={this.state.state}/>
                        <div className="button" id="back" onClick={this.handleClick("back")}>Begin opnieuw</div>
                        <div className="button" id="save" onClick={this.handleClick("save")}>Download je tekening</div>
                    </div> 
                </div>
            )
        }
    }
}

export default doodle;