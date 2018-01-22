import React, {Component} from 'react'
import WhiteBbs from './WhiteBbs/WhiteBbs'
import BioBbs from './BioBbs/BioBbs'
import TracerBbs from './TracerBbs/TracerBbs'
import './products.css'

function Products (){
        return(
            <div>
                <WhiteBbs name='white'/>
                <BioBbs name='bio'/>
                <TracerBbs name='tracer'/>
            </div>
            
        )
    }
export default Products