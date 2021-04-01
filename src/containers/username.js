import { Component } from "react";

export default class Username extends Component {
  state = {
    player1: "",
    player2: "",
    rememberMe: false,
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { player1,player2, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("player1", rememberMe ? player1 : "");
    localStorage.setItem("player2", rememberMe ? player2 : "");
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          player 1: 
          <input
            name="player1"
            value={this.state.player1}
            onChange={this.handleChange}
          />
        </label>
        <label>
          player 2:
          <input
            name="player2"
            value={this.state.player2}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            name="rememberMe"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
            type="checkbox"
          />{" "}
          Remember me
        </label>
        <button type="submit">Get In</button>
      </form>
    );
  }
}

