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
      item: [],
      editing: false
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.currentEdit = this.currentEdit.bind(this)
    this.isEditing = this.isEditing.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory')
    .then(response => this.setState({inventory: response.data}))
  }

  currentEdit(id) {
    let filt = this.state.inventory.map((item,index) => {
      if (item.product_key === id) {
        this.setState({item: this.state.inventory[index]})
      }
    })
  }

  isEditing() {
  this.state.editing ? this.setState({editing: false}) : this.setState({editing: true})
  }

  render() {
    console.log(this.state.editing)
    return (
      <div className="App">
      <Header />
      <div className='left_container'>
      <Dashboard mount={this.componentDidMount} list={this.state.inventory} editor={this.state.editing} edit={this.currentEdit} editing={this.isEditing}/>
      </div>
      <Form mount={this.componentDidMount} item={this.state.item} editor={this.state.editing}/>
      </div>
    );
  }
}

export default App;
