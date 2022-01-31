import "./App.css";
import { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  constructor(props) {
    super(props);

    const numBoxes = 24;
    const boxes = [];

    for (let i = 0; i < numBoxes; i++) {
      boxes.push({ 
        id: i, 
        color: `rgb(${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)})`,
     });
    }

    // set default state
    this.state = {
      boxes, 
    };
    // bind methods to this
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  getRandomNumber(min = 0, max = 100) {
    return Math.round(Math.random() * (max - min) + min);
  }

  handleColorChange(event, all = false) {
    const newBoxes = this.state.boxes.map((box) => {
      if (box.id == event.target.id || all) {
        box.color = `rgb(${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)})`;
      }

      return box;
    });

    this.setState({ boxes: newBoxes });
  }

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <button onClick={(e) => this.handleColorChange(e, true)}>
          Random All
          </button>
        <div className="App">
          {this.state.boxes.map((box) => {
          return (
          <Box 
          key={box.id} 
          color={box.color} 
          id={box.id} 
          handleColorChange={this.handleColorChange}
          />
          );
          })}
        </div>
      </main>
    );
  }
}

export default App;
