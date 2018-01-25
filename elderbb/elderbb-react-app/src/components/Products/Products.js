import React, {Component} from 'react'
import * as Scroll from 'react-scroll';
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

import WhiteBbs from './WhiteBbs/WhiteBbs'
import BioBbs from './BioBbs/BioBbs'
import TracerBbs from './TracerBbs/TracerBbs'
import './products.css'
import NavBar from './../HomePage/NavBar/NavBar'

class Products extends Component{
    constructor(props){
        super(props)
        this.scrolling=this.scrolling.bind(this)
    }

    scrolling(element){
        scroller.scrollTo(element, {duration: 500, delay: 50,smooth: true, offset:-250})
    }

    render(){
        
        return(
            <div>
                <NavBar scrolling={this.scrolling}/>
                <Element name='white'><WhiteBbs /></Element>
                <Element name='bio'><BioBbs /></Element>
                <Element name='tracer'><TracerBbs /></Element>
            </div>
            
        )
    }
}    
export default Products