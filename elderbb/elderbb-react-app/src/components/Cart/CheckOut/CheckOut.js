import React, {Component} from 'react'
import axios from 'axios'
import './checkout.css'

class CheckOut extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: [],
            total: 0
        }
    }

    componentDidMount(){ 
        
        axios.get('/api/cart')
            .then((resp)=>{this.setState({products: resp.data})
            if(this.state.products.length <= 0){
                return null} else {
            this.updateTotal()}
            console.log(resp.data)})
    } 
            
    
    updateTotal(){
        let cartTotals = this.state.products.map((prod)=>{return(Number(prod.price)*Number(prod.qty))})
        let total = cartTotals.reduce((total, val)=>total+=val)
        this.setState({total: total})
    }
    
    handleClick(){
        axios.get('/api/cart')
        .then((resp)=>{this.setState({products: resp.data})
        if(this.state.products.length <=0){
            return null} else {
        this.updateTotal()}
         } )
    }
    

    render(){
        return( 
            <div className='updateCart'>
                <button onClick={()=>this.handleClick()}>Update Cart</button>
                <div>$  {this.state.total}</div>
            </div>
        )
    }
} export default CheckOut