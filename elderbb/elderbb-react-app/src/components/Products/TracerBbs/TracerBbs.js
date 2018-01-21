import React, {Component} from 'react'
import axios from 'axios'
import './tracer.css'

class TracerBbs extends Component{
    constructor(props){
        super(props)

        this.state={
            products: []
        }
    }
    componentDidMount(){
        axios.get('/api/products?type=tracer')
            .then((resp)=>{
                this.setState({products: resp.data})
            })
    }
    render(){
        return(
            <div>
                {this.state.products.map((val)=>{
                    <div className='tiles'>
                    <div className='name'>{val.product}</div>
                    <div className='info'>{val.amount}</div>
                    <div className='price'>{val.price}</div>
                    <div className='qty'>{val.qty}</div>
                </div>

                })}
            </div>
        )
    }
} export default TracerBbs