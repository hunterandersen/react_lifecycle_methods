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
      ...this.state,
      ...{
        hasLoaded: true,
      },
    });
  }

  handleClick = () => {
    let tempObj = {
      hasLoaded: !this.state.hasLoaded,
    };

    this.setState({
      ...this.state,
      ...tempObj,
    });
  };

  handleInput = (event) => {
    let tempObj = {
      text: event.target.value,
    };

    this.setState({
      ...this.state,
      ...tempObj,
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
