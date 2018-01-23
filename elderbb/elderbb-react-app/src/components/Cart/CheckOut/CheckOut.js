import React, {Component} from 'react'
import axios from 'axios'
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
            this.updateTotal()
            console.log(resp.data)})
            
            
    }
    updateTotal(){
        let cartTotals = this.state.products.map((prod)=>{return(Number(prod.price)*Number(prod.qty))})
        let total = cartTotals.reduce((total, val)=>total+=val)
        this.setState({total: total})
    }
    
    handleClick(){
        // axios.get('/api/cart')
        // .then((resp)=>{this.setState({products: resp.data})
        
        // this.updateTotal()
    }

    render(){
        return( 
            <div>
                <button onClick={()=>this.handleClick()}>$  {this.state.total}</button>
            </div>
        )
    }
} export default CheckOut