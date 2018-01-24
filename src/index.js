import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/App';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: 'Kostya'
        }
    }

    handleChange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Welcome</h1>
                <p>Hello {this.state.name}</p>
                <input onChange={this.handleChange} defaultValue={this.state.name}/>
                <App name="testt" />
            </div>
        )
    }
}

export default Welcome;

ReactDOM.render(<Welcome name="test"/>, document.getElementById('app'));