import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "init string",
      hasLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      hasLoaded: true,
    });
  }

  handleClick = () => {
    this.setState({
      hasLoaded: !this.state.hasLoaded,
    });
  };

  handleInput = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <h1>Welcome to React!</h1>
        <hr />
        {this.state.hasLoaded ? (
          <div>
            <input
              type="text"
              name="inputMain"
              id="inputMain"
              placeholder={this.state.text}
              onChange={this.handleInput}
            />
            <button onClick={this.handleClick}>Toggle Me</button>
          </div>
        ) : (
          <button onClick={this.handleClick}>Second Toggle</button>
        )}
      </div>
    );
  }
}

export default App;
