import React from 'react'
import './css files/Header.css';
import {Link} from "react-router-dom"
import pokedeximg from '../../src/pokedeximg.png'


function Header() {
    return (
       <div className="nav-contain">
      
           <div className="first-head">
                <img id="pokedex-img" src={pokedeximg} alt=""></img>
                <div className="name"> 
                     
                </div>
               </div>
              
               <Link to="/path">
                   <button className="button">
                       
                       {/* About this Pokedex */}

                       <span className="red"> A</span>
                   <span className= "red">b</span>
                   <span className="red">o</span>
                   <span className="red">u</span>
                    <span className= "red">t</span>
                   
                    
                       </button>
                       </Link>
              

        </div>
       
    )
};
export default Header