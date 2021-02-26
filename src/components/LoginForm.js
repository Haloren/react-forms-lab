import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleName = (event) => {
    // console.log(event.target)
    this.setState({username: event.target.value})
  }
  handlePassword = (event) => {
    // console.log("Password", event.target.value)
    this.setState({password: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props, this.state.username, this.state.password)

    let formData = { username: this.state.username, password: this.state.password}
    this.props.handleLogin(formData)

    this.setState({username: "", password: ""}) // clears form after submit
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleName(event)} required/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handlePassword(event)} required/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
