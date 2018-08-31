import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: [],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory')
    .then(response => this.setState({inventory: response.data}))
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
      <Header />
      <div className='left_container'>
      <Dashboard mount={this.componentDidMount} list={this.state.inventory}/>
      </div>
      <Form mount={this.componentDidMount} />
      </div>
    );
  }
}

export default App;
