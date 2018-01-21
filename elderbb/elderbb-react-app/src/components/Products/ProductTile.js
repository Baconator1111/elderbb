import React, {Component} from 'react'
import axios from 'axios'

function handleClick(product){
    axios.post(`/api/cart/`, product)
}

function ProductTile(props){ 
    const val = props.val
        return(
            <div key={val._id} className='tiles'>
                {/* <img src="" alt=""/> */}
                <div className='name'>{val.product}</div>
                <div className='info'>{val.amount}</div>
                <div className='price'>${val.price}</div>
                <div className='qty'>Quantity: {val.qty}</div>
                <button onClick={()=>handleClick(val)}>Add to Cart</button>
            </div>
        )
    
} export default ProductTile