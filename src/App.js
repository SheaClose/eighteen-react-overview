import React, { Component } from "react";
import logo from "./logo.svg";
import Input from "./Input";
import List from "./List";
import Button from "./Button";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addCatToList = this.addCatToList.bind(this);
  }

  handleInputChange(e) {
    // Object.assign({}, this.state, { userInput: e.target.value });
    this.setState({ userInput: e.target.value });
  }

  addCatToList() {
    // this.state.list.push(this.state.userInput)
    // let newList = this.state.list.slice();
    // newList.push(this.state.userInput);

    this.setState({
      // list: newList
      list: [this.state.list, this.state.userInput],
      userInput: ""
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {/* <input placeholder="New Cat" onChange={this.handleInputChange} /> */}
        <Input
          userInput={this.state.userInput}
          changeHandler={this.handleInputChange}
        />
        <Button handleClick={this.addCatToList} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
