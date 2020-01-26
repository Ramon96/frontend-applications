/* eslint-disable default-case */
import React, { Component } from 'react'
import CanvasFreeDrawing from 'canvas-free-drawing';

import undo from '../img/undo.png';
import redo from '../img/redo.png';
import bucket from '../img/bucket.png';
import startover from '../img/startover.png';
import erase from '../img/erase.png';


class DrawingBoard extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: []
        }

    }

    componentDidMount(){
        this.cfd = new CanvasFreeDrawing({
            elementId: 'cfd',
            width: 500,
            height: 500,
          });
            this.cfd.setLineWidth(10); // in px
            this.cfd.isDrawingModeEnabled  = false;
    }

    componentDidUpdate(){

        this.cfd.setDrawingColor(this.state.color); // in RGB

    }

    changeColor = (color) => {
        switch(color){
            case "white":
                this.setState({color: [255, 255, 255]});
                break;
            case "black":
                this.setState({color: [0, 0, 0]});
                break;
            case "gray":
                this.setState({color: [100, 100, 100]});
                break;
            case "red":
                this.setState({color: [255, 0, 0]});
                break;
            case "blue":
                this.setState({color: [0, 0, 255]});
                break;
            case "purple":
                this.setState({color: [255, 0, 255]});
                break;
            case "green":
                this.setState({color: [0, 255, 0]});
                break;
            case "brown":
                this.setState({color: [139, 69, 19]});
                break;
            case "orange":
                this.setState({color: [255, 140, 100]});
                break;
            case "yellow":
                this.setState({color: [255, 255, 0]});
                break;
        }
    }

    actionButton = (action) => {

        switch(action){
            case "undo":
                this.cfd.undo();
                break;
            case "redo":
                this.cfd.redo();
                break;
            case "bucket":
                    this.cfd.configBucketTool({
                        color: this.state.color,
                        tolerance: 50
                    });
            const isActive = this.cfd.toggleBucketTool();
            document.getElementById('bucket').classList.add('active');
            if (isActive) {
            } else {
              document.getElementById('bucket').classList.remove('active');
            }
            break;
            case "clear":
                this.cfd.clear();
                break;
        }

    }


    render() {
        if(this.props.state !== "drawing"){
            return(
                <div id='drawingboard'>
                <h2>Maak hier jou tekening</h2>
                <canvas className="noClick" id="cfd"></canvas>
            </div>
            )
        }
        else{
        return (
            <div id='drawingboard'>
                <h2>Maak hier jou tekening</h2>
                <canvas id="cfd"></canvas>
                {/* Mischien het workbench verbergen als de gebruiker klaar is */}
                <div id="workbench">
                    <button id="eraser" onClick={() => this.changeColor('white')}><img src={erase} alt="Gum je fouten weg" /></button>
                    <button id="black" onClick={() => this.changeColor('black')}></button>
                    <button id ="gray" onClick={() => this.changeColor('gray')}></button>
                    <button id="red" onClick={() => this.changeColor('red')}></button>
                    <button id="blue" onClick={() => this.changeColor('blue')}></button>
                    <button id="purple" onClick={() => this.changeColor('purple')}></button>
                    <button id="green" onClick={() => this.changeColor('green')}></button>
                    <button id="brown" onClick={() => this.changeColor('brown')}></button>
                    <button id="orange" onClick={() => this.changeColor('orange')}></button>
                    <button id="yellow" onClick={() => this.changeColor('yellow')}></button> 
                    <button id="bucket" onClick={() => this.actionButton('bucket')}><img src={bucket} alt="Kleur de binnenkant helaal in" /></button> 
                    <button id="restart" onClick={() => this.actionButton('clear')}><img src={startover} alt="begin opnieuw" /></button> 
                    <button id="undo" onClick={() => this.actionButton('undo')}><img src={undo} alt="ga een stapje terug" /></button> 
                    <button id="redo" onClick={() => this.actionButton('redo')}><img src={redo} alt="ga een stap vooruit" /></button> 
                </div>

            </div>
        )
        }
    }
}



export default DrawingBoard;