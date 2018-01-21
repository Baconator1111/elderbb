import React, {Component} from 'react'
import axios from 'axios'
import ProductTile from './../ProductTile'
import './../products.css'

class BioBbs extends Component{
    constructor(props){
        super(props)

        this.state={
            products: []
        }
        
    }
    componentDidMount(){
        axios.get('/api/products?type=bio')
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
                <h3>Biodegradable Bbs</h3>
                <div className='tiles'>
                {this.state.products.map((val)=>{
                    return(
                        <div key={val._id}  className='tile'>
                            <img className='productImg' src="./images/biobbs.jpeg" alt="Biodegradable"/>
                            <ProductTile  val={val} />
                        </div>
                    )

                })}
                </div>    
            </div>
                )
            }
        
    }
} export default BioBbs