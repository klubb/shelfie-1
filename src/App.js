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
      item: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.currentEdit = this.currentEdit.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory')
    .then(response => this.setState({inventory: response.data}))
  }

  currentEdit(id) {
    this.setState({item: this.state.inventory[id]})
  }

  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
      <Header />
      <div className='left_container'>
      <Dashboard mount={this.componentDidMount} list={this.state.inventory} edit={this.currentEdit} />
      </div>
      <Form mount={this.componentDidMount} item={this.state.item}/>
      </div>
    );
  }
}

export default App;
