import { Component } from "react";
import { Redirect } from "react-router";
import "./username.css";

export default class Username extends Component {
  documentData;
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      player1: "",
      player2: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // on form submit...
  handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem("document", JSON.stringify(this.state));
  }

  // on form game...
  state = {
    redirect: false,
  };
  redirectHandler = () => {
    this.setState({ redirect: true });
    this.renderRedirect();
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/Gamebox" />;
    }
  };

  // React Life Cycle
  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem("document"));

    if (localStorage.getItem("document")) {
      this.setState({
        player1: this.documentData.player1,
        player2: this.documentData.player2,
      });
    } else {
      this.setState({
        player1: "",
        player2: "",
      });
    }
  }

  render() {
    return (
      <div className="container py-3">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>
              <b>Player 1 (Cyan)</b>
            </label>
            <input
              type="text"
              name="player1"
              className="form-control"
              value={this.state.player1}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group lable1">
            <label1>
              <b>Player 2 (Magenta)</b>
            </label1>
            <input
              type="text"
              name="player2"
              className="form-control"
              value={this.state.player2}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg mr-4">
            Submit
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={this.redirectHandler}
          >
            Get Into The Game
          </button>
          {this.renderRedirect()}
        </form>
      </div>
    );
  }
}
