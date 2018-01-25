import React, {Component} from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import * as Scroll from 'react-scroll'
import { Link as ScrollLink, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'





function NavBar(props){

    function autoScroll(){
        //use redux to auto scroll
    }

    function handleWhite(){
        props.scrolling('white')
    }

    function handleBio(){
        props.scrolling('bio')
    }

    function handleTracer(){
        props.scrolling('tracer')
    }


        
        return(
            <div>
                <nav className='mainNav'>
                    <div className='logo'>
                        <img src="./images/elder-bb-logo.png" alt="Logo"/>
                    </div>
                    <div className='productLinks'>
                    {props.url !== '/cart'?
                            <div>
                                <ScrollLink><button onClick={()=>handleWhite()}>White</button></ScrollLink>                        
                                <ScrollLink><button onClick={()=>handleBio()}>Biodegradable </button> </ScrollLink>                       
                                <ScrollLink><button onClick={()=>handleTracer()}>Tracer</button> </ScrollLink>
                            </div>
                        :   <div>  
                                <Link to='/products'><button>White</button></Link>                        
                                <Link to='/products'><button>Biodegradable </button> </Link>                       
                                <Link to='/products'><button>Tracer</button> </Link>
                            </div>    
                    }
                    </div>
                    <div>
                        {/* <img src="" alt=""/> */}
                        <Link to='/cart'> <button>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                <div>
                                    {}
                                </div>
                            Go to Cart 
                            </button></Link>
                    </div>
                </nav>
            </div>
    )  
} export default NavBar