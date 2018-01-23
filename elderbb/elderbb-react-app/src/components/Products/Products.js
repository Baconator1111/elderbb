import React from 'react'
import WhiteBbs from './WhiteBbs/WhiteBbs'
import BioBbs from './BioBbs/BioBbs'
import TracerBbs from './TracerBbs/TracerBbs'
import './products.css'
import NavBar from './../HomePage/NavBar/NavBar'


function Products (){
        return(
            <div>
                <NavBar/>
                <WhiteBbs name='white'/>
                <BioBbs name='bio'/>
                <TracerBbs name='tracer'/>
            </div>
            
        )
    }
export default Products