import React from "react";

class TwitterMessage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {message: ""};
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    // console.log("State", this.state.message)
    // console.log("Props", this.props)

    const remainingChars = this.props.maxChars - this.state.message.length

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} maxLength="280"></input>
        <label> {remainingChars}</label>
      </div>
    );
  }
}

export default TwitterMessage;
