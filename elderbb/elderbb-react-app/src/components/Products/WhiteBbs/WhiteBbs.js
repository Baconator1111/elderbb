import React, {Component} from 'react'
import axios from 'axios'
import ProductTile from './../ProductTile'
import './white.css'

class WhiteBbs extends Component{
    constructor(props){
        super(props)

        this.state={
            products: []
        }
        
    }
    componentDidMount(){
        axios.get('/api/products?type=white')
            .then((resp)=>{
                this.setState({products: resp.data})
            })
    }

    
    render(){
        if(!this.state.products){
             return <div>Loading</div>
        } else{
        return(
            <div>
                        <h3>White Bbs</h3>
                {this.state.products.map((val)=>{
                    return(
                       <ProductTile key={val._id} val={val}/>
                    )

                })}
            </div>
                )
            }
        
    }
} export default WhiteBbs