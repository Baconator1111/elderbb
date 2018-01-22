import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import Homepage from './components/Home-page/Home-page'
import NavBar from './components/HomePage/NavBar/NavBar'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3060/api/cart').then(resp => {
      this.setState({
       todos: resp.data
      })
    })
  }
  render() {
      // var todosToDisplay = this.state.cart.map((product)=>{
      //   return <Products name={product.name}/>
      // })
    return (
      <div className="App">
        <NavBar/>
        <Products />
        <Cart />
      </div>
    );
  }
}
export default App;