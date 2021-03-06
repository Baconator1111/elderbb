import React, {Component} from 'react'
import axios from 'axios'
import './cart.css'
import CheckOut from './CheckOut/CheckOut'
import NavBar from './../HomePage/NavBar/NavBar'

class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            cart: []
        }
    }
    componentDidMount(){
        axios.get('/api/cart')
            .then((resp)=>{
                this.setState({cart: resp.data})
            })
    }
    handleChange(input, _id){
        if(+input>0){
        if(input){
        axios.put(`/api/cart/${_id}/${input}`)
        .then( (resp)=>{this.setState({cart: resp.data})})
        }
        }else {alert('Quantity cannot be less than 1')}
    } 
    handleClick(_id){
        console.log('handleClick')
        axios.delete(`/api/cart/${_id}`)
        .then( (resp)=>{this.setState({cart: resp.data})})
    }
    render(){
        console.log(this.props)
        
        return(
            <div className='cartMain'>
                <NavBar url={this.props.match.path}/>
                <h1>Cart</h1>
                {this.state.cart.map((val)=>{
                    return(
                        <div key={val._id} className='table'>
                            <div className='itemName'>{val.product}</div>
                            <div className='itemInfo'>{val.amount}</div>
                            <div className='itemPrice'>${val.price}</div>
                            <div className='itemQty'>Quantity: {val.qty}</div>
                            <input type="number" min="1" onChange={e=>this.handleChange(e.target.value, val._id)} placeholder='Change Quantity Here'/>
                            <button onClick={()=>{this.handleClick(val._id);
                                console.log('onClick button', val._id)}}>Delete Item</button>
                        </div>
                    )}
                )}
                <CheckOut />
            </div>
        )
    }
} export default Cart
            