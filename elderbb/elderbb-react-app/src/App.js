import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Homepage from './components/Home-page/Home-page'
import NavBar from './components/Home-page/Home-page'
import Products from './components/Products/Products'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3060/api/cart').then(resp => {
      console.log(resp);
      this.setState({
       todos: resp.data
      })
    })
  }
  render() {
      var todosToDisplay = this.state.cart.map((product)=>{
        return <Products name={product.name}/>
      })
    return (
      <div className="App">
        {todosToDisplay}
      </div>
    );
  }
}
export default App;
