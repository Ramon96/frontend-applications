/* eslint-disable default-case */
import React, { Component } from 'react'
import CanvasFreeDrawing from 'canvas-free-drawing';

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

        return (
            <div id='drawingboard'>
                <h2>Het tekenbord</h2>
                <canvas id="cfd"></canvas>
                <div id="workbench">
                    <button id="eraser" onClick={() => this.changeColor('white')}>Gum</button>
                    <button id="black" onClick={() => this.changeColor('black')}></button>
                    <button id ="gray" onClick={() => this.changeColor('gray')}></button>
                    <button id="red" onClick={() => this.changeColor('red')}></button>
                    <button id="blue" onClick={() => this.changeColor('blue')}></button>
                    <button id="purple" onClick={() => this.changeColor('purple')}></button>
                    <button id="green" onClick={() => this.changeColor('green')}></button>
                    <button id="brown" onClick={() => this.changeColor('brown')}></button>
                    <button id="orange" onClick={() => this.changeColor('orange')}></button>
                    <button id="yellow" onClick={() => this.changeColor('yellow')}></button> 
                    <button id="bucket" onClick={() => this.actionButton('bucket')}>Emmer</button> 
                    <button id="restart" onClick={() => this.actionButton('clear')}>Begin opnieuw</button> 
                    <button id="undo" onClick={() => this.actionButton('undo')}>Stapje terug</button> 
                    <button id="redo" onClick={() => this.actionButton('redo')}>Stapje vooruit</button> 
                </div>

            </div>
        )
    }
}



export default DrawingBoard;