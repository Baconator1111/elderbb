import React, {Component} from 'react'
import axios from 'axios'

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
        if(input){
        axios.put(`/api/cart/${_id}/${input}`)
        .then( (resp)=>{this.setState({cart: resp.data})})
    }} 
    handleClick(_id){
        console.log('handleClick')
        axios.delete(`/api/cart/${_id}`)
        .then( (resp)=>{this.setState({cart: resp.data})})
    }
    render(){
        return(
            <div>
                <h1>Cart</h1>
                {this.state.cart.map((val)=>{
                    return(
                        <div key={val._id} className='tiles'>
                            <div className='name'>{val.product}</div>
                            <div className='info'>{val.amount}</div>
                            <div className='price'>${val.price}</div>
                            <div className='qty'>Quantity: {val.qty}</div>
                            <input type="number" onChange={e=>this.handleChange(e.target.value, val._id)} placeholder='Change Quantity Here'/>
                            <button onClick={()=>{this.handleClick(val._id);
                                console.log('onClick button', val._id)}}>Delete Item</button>
                        </div>
                    )}
                )}
            </div>
        )
    }
} export default Cart
            