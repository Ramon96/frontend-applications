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
            document.getElementById('button').classList.add('active');
            if (isActive) {
            } else {
              document.getElementById('button').classList.remove('active');
            }
            break;
            case "clear":
                this.cfd.clear();
                break;
        }

    }


    render() {

        return (
            <div>
                <canvas id="cfd"></canvas>
                <button onClick={() => this.changeColor('white')}>Gum</button>
                <button onClick={() => this.changeColor('black')}>Zwart</button>
                <button onClick={() => this.changeColor('gray')}>Grijs</button>
                <button onClick={() => this.changeColor('red')}>Rood</button>
                <button onClick={() => this.changeColor('blue')}>Blauw</button>
                <button onClick={() => this.changeColor('purple')}>Paars</button>
                <button onClick={() => this.changeColor('green')}>Groen</button>
                <button onClick={() => this.changeColor('brown')}>Bruin</button>
                <button onClick={() => this.changeColor('orange')}>Oranje</button>
                <button onClick={() => this.changeColor('yellow')}>Geel</button> 



                <button id="button" onClick={() => this.actionButton('bucket')}>Emmer</button> 
                <button onClick={() => this.actionButton('clear')}>Begin opnieuw</button> 
                <button onClick={() => this.actionButton('undo')}>Stapje terug</button> 
                <button onClick={() => this.actionButton('redo')}>Stapje vooruit</button> 


            </div>
        )
    }
}



export default DrawingBoard;