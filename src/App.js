import React from "react";
import "./App.css";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binary: 0,
      decimal: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ binary: event.target.value });
    let binary = event.target.value;
    let binaryNumber = event.target.value.toString();
    if (this.checkValid(binary)) {
      let decimal = 0;

      let j = binaryNumber.length - 1;
      for (var i = 0; i < binaryNumber.length; i++) {
        decimal += binaryNumber[i] * 2 ** j;
        j--;
      }
      this.setState({ decimal: decimal });
    } else {
      this.setState({ decimal: "Error" });
    }
  }

  checkValid(num) {
    num = num.toString();

    let valid = true;
    for (var k = 0; k < num.length; k++) {
      if (num.charAt(k) !== "0" && num.charAt(k) !== "1") {
        valid = false;
      }
    }
    return valid;
  }

  render() {
    return (
      <div className="App">
        <h1>Binary to Decimal</h1>

        <label>
          Binary:
          <input
            onChange={this.handleChange}
            value={this.state.value}
            type="number"
            name="binary"
          />
        </label>

        <h2 id="Decimal">
          Decimal: <br /> {this.state.decimal}
        </h2>
      </div>
    );
  }
}
