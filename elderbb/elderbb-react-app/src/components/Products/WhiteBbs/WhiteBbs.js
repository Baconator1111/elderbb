import React, {Component} from 'react'
import axios from 'axios'
class Todo extends Component{
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
        return(
            <div>
                {this.state.products.map((val)=>{
                    <div>
                        <div>{val.product}</div>
                        <div>{val.amount}</div>
                        <div>{val.price}</div>
                    </div>

                })}
            </div>
        )
    }
} export default Todo