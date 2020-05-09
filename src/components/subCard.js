import React, { PureComponent } from "react";
import "../App.css";

class SubCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="statsCard">
        <p>{this.props.label}</p>
        <h3>{this.props.data}</h3>
      </div>
    );
  }
}

export default SubCard;
