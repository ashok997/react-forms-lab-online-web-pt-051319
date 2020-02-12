import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };

  }

  handleOnChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  renderRemainingChars = () => {
    let value = this.props.maxChars - this.state.message.length
    return <p> {value} </p>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleOnChange} name="message" id="message" value={this.state.message} />
        {this.renderRemainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
