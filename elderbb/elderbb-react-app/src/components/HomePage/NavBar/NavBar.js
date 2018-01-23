import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
// import * as Scroll from 'react-scroll'
// import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// function handleWhite(){
//     scroller.scrollTo('white', {
//         duration: 800,
//         delay: 0,
//         smooth: 'easeInOutQuart'
//       })
// }
// function handleBio(){

// }
// function handleTracer(){

// }



function NavBar (props){
    return(
        <div>
            <nav className='mainNav'>
                <div className='logo'>
                    <img src="./images/elder-bb-logo.png" alt="Logo"/>
                </div>
                <div className='productLinks'>
                    <Link to='/products'><button>White</button></Link>                        
                    <Link to='/products'> <button>Biodegradable </button> </Link>                       
                    <Link to='/products'> <button>Tracer</button> </Link>
                      
                    
                </div>
                <div>
                    {/* <img src="" alt=""/> */}
                    <Link to='/cart'> <button> Go to Cart </button></Link>
                </div>
            </nav>
        </div>
    )    
} export default NavBar