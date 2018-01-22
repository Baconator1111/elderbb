import React from 'react'
import './NavBar.css'
import * as Scroll from 'react-scroll'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function handleWhite(){
    scroller.scrollTo('white', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
}
function handleBio(){

}
function handleTracer(){

}


function NavBar (props){
    return(
        <div>
            <nav className='mainNav'>
                <div className='logo'>
                    <img src="./images/elder-bb-logo.png" alt="Logo"/>
                </div>
                <div className='productLinks'>
                    <button className='whiteBtn'>
                        <Link activeClass="active" to="white" spy={true} smooth={true} offset={50} duration={500} >White</Link>
                    </button>
                    <button className='bioBtn'>
                        <Link activeClass="active" to="bio" spy={true} smooth={true} offset={50} duration={500} >Biodegradable</Link>
                    </button>
                    <button className='tracerBtn'>
                        <Link activeClass="active" to="tracer" spy={true} smooth={true} offset={50} duration={500} >Tracer</Link>

                    </button>
                </div>
                <div>
                    {/* <img src="" alt=""/> */}
                    <button>Go to Cart</button>
                </div>
            </nav>
        </div>
    )    
} export default NavBar