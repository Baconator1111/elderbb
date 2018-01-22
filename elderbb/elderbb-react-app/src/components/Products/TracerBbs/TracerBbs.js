import React, {Component} from 'react'
import axios from 'axios'
import ProductTile from './../ProductTile'
import './../products.css'
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
        if(!this.state.products){
             return <div>Loading</div>
        } else{
        return(
            <div className='tracerProd'>
                <h3>Tracer Bbs</h3>
                <div className='tiles'>
                {this.state.products.map((val)=>{
                    return(
                        <div key={val._id}  className='tile'>
                            <img className='productImg' src="./images/tracerBbs.png" alt="Tracer"/>
                            <ProductTile  val={val} />
                        </div>
                    )

                })}
                </div>    
            </div>
                )
            }
        
    }
} export default TracerBbs