import React, {Component} from 'react';
import myPhoto from '../photos/kyle.jpg';

const style = {
  photo : {
    marginTop: '5%',
    width: '75%',
    borderRadius: '7px'
  }
}

class Photo extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <div>
            <img alt="kyle photo" className="is-centered" style={style.photo} src={myPhoto}/>
        </div>
    );
  }

}

export default Photo;

