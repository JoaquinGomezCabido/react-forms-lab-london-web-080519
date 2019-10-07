import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleUpdate = event => {
    this.setState({
      input: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length,
    });
  };

  // updateCount = () => {
  //   let text = toString(this.state.input);
  //   this.setState({ charsLeft: this.props.maxChars - text.length });
  // };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.input}
          onChange={event => this.handleUpdate(event)}
        />
        <p>
          MaxChars: {this.props.maxChars}, left {this.state.charsLeft}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
