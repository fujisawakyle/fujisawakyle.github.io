import React, {Component} from 'react';

class References extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <div>
            <br/>
            <h4>References available upon request</h4>
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default References;
