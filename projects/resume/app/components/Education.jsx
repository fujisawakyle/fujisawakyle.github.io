import React, {Component} from 'react';

const style = {
  
}

class Education extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <div className="has-text-centered">
            
            <h1 className="title is-2">Education</h1>
            <h2 className="title is-4">freeCodeCamp</h2>
            <h3 className="subtitle is-6">Front End Web Developer Certification</h3>
            <br/>
            <h2 className="title is-4">University of California, Santa Cruz</h2>
            <h3 style={style.padding} className="subtitle is-6">B.S. Molecular, Cell, and Developmental Biology
              <br/>Minor: Bioinformatics
            </h3>
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Education;
