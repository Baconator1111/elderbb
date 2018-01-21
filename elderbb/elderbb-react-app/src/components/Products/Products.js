import React, {Component} from 'react'
import WhiteBbs from './WhiteBbs/WhiteBbs'
import BioBbs from './BioBbs/BioBbs'
import TracerBbs from './TracerBbs/TracerBbs'
import './products.css'

function Products (){
        return(
            <div>
                <WhiteBbs />
                <BioBbs />
                <TracerBbs />
            </div>
            
        )
    }
export default Products