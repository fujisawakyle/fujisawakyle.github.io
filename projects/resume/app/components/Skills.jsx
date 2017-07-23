import React, {Component} from 'react';

class Skills extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <div className="has-text-centered">
            
            <h1 className="title is-2">Skills</h1>
            
            <div className="columns">
                
                <div className="column is-6">
                    <h1 className="title is-4">Web Development</h1>
                </div>
                <div className="column is-5">
                    <h1 className="title is-4">Media Production</h1>
                </div>
            </div>
            <div className="columns">
                
                <div className="column is-6">
                    <ul>
                        <li>HTML5, CSS3</li>
                        <li>JavaScript, jQuery</li>
                        <li>Bootstrap, Flexbox</li>
                    </ul>       
                </div>
                <div className="column is-5">
                    <ul>
                        <li>Adobe Premiere</li>
                        <li>Adobe Photoshop</li>
                        <li>Final Cut Pro</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Skills;
