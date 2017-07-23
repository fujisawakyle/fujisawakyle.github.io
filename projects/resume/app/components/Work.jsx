import React, {Component} from 'react';

const style = {
    infoText : {
        fontSize : '0.7em',
        textAlign: 'left',
        paddingLeft: '22%',
        paddingRight: '22%',
        
    },
    icon : {
        fontSize : '0.5em',
        lineHeight: '8px',
        padding: '4px',

    }
}

let AEinfo, MFAinfo;

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            AEtoggle : false,
            MFAtoggle : false
        };
        this.AEClick = this.AEClick.bind(this);
        this.MFAClick = this.MFAClick.bind(this);
    }
AEClick () {
    this.setState ({
        AEtoggle : !this.state.AEtoggle
    }) 
} 
MFAClick () {
    this.setState ({
        MFAtoggle : !this.state.MFAtoggle
    })
}
  render() {
    
    if (this.state.AEtoggle) {
        AEinfo = ( <div>
            <h2 className="title is-4">Animal Equality</h2>
            <h3 className="subtitle is-5">Investigations Associate
                <span>
                        <br/>
                        <i onClick={this.AEClick} className="fa fa-angle-up"></i><br/>
                    <ul>
                        <li style={style.infoText}><i style={style.icon}className="fa fa-circle"></i>Edited Investigation videos for government officials.</li>
                        <li style={style.infoText}><i style={style.icon}className="fa fa-circle"></i>Assisted with production and implementation of <span><a href="http://ianimal360.com/chickens/tour/index.html" target="blank">iAnimal 360 Virtual Tour</a></span>.</li>
                        <li style={style.infoText}><i style={style.icon}className="fa fa-circle"></i>Assisted with testing for Android and Gear VR iAnimal mobile application.</li>
                    </ul>
                    
                    </span></h3>
        </div>
        );
    } 
    else if(this.state.MFAtoggle) {
        MFAinfo = ( <div>
            <br/>
            <h2 className="title is-4">Mercy For Animals</h2>
            <h3 className="subtitle is-5">Investigations and Research Associate
                    <span>
                        <br/>
                        <i onClick={this.MFAClick} className="fa fa-angle-up"></i><br/>
                    <ul>
                        <li style={style.infoText}><i style={style.icon}className="fa fa-circle"></i>Edited Investigation videos for law enforcement, animal welfare experts, and media outlets</li>
                        <li style={style.infoText}><i style={style.icon}className="fa fa-circle"></i>Conducted background research connecting farms to distribution centers and corporations.</li>
                        <li style={style.infoText}><i style={style.icon}className="fa fa-circle"></i>Organized the investigations file database for more efficient referencing</li>
                        <li style={style.infoText}><i style={style.icon}className="fa fa-circle"></i>Planned press conference events.</li>
                    </ul>
                    
                    </span></h3>
        </div>

        )
    }
    else {
        AEinfo = ( <div>
            <h2 className="title is-4">Animal Equality</h2>
            <h3 className="subtitle is-5">Investigations Associate
                    <span><br/><i onClick={this.AEClick} className="fa fa-angle-down"></i></span></h3>
        </div>
        );
        
        MFAinfo = ( <div>
            <h2 className="title is-4">Mercy For Animals</h2>
            <h3 className="subtitle is-5">Investigations and Research Associate
                    <span><br/><i onClick={this.MFAClick} className="fa fa-angle-down"></i></span></h3>
        </div>

        )
    }
    return (
        <div>
            <div className="has-text-centered">
                <h1 className="title is-2">Work History</h1>
                {AEinfo}
                <br/>
                {MFAinfo}
            </div>
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Work;
