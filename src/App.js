import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    data: null,
    newData: ''
  }
  this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}


componentDidMount(){
    database.ref().on('value', (snapshot)=>{
        this.setState({
            data: snapshot.val()
        })
    });
}

handleChange(event){
    const newData = event.target.value;
    this.setState({
        newData
    });
}

handleSubmit(event){
    event.preventDefault();
    database.ref().child('AMAzing').push(this.state.newData)
}
  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
            {JSON.stringify(this.state.data, null, 2)}
        </pre>
        <form className='App--form' onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} value={this.state.newData} />
        <input type='submit' />
        </form>
      </div>
    );
  }
}

export default App;