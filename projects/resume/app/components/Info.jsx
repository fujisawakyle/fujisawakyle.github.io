import React, {Component} from 'react';

const style = {
  box : {
    fontSize: '2em'
  },
  icon : {
    paddingLeft: '0.1em'
  }
}

class Info extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <div className="has-text-centered" style={style.box}>
            <ul>
            <li><h1 style={style.box} className="title is-1">Kyle Fujisawa</h1></li>
            <span className="icon">
              <i style={style.icon} className="fa fa-minus"></i> 
              <i style={style.icon}className="fa fa-minus"></i> 
              <i style={style.icon}className="fa fa-minus"></i>
            </span>
            <li><h2 className="subtitle is-4">github.com/fujisawakyle</h2></li>
            <li><h2 className="subtitle is-4">fujisawakyle@gmail.com</h2></li>
            <li><h2 className="subtitle is-4">310-980-9298</h2></li>
            </ul>
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Info;
