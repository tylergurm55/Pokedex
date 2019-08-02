import React from 'react'
import './css files/About.css';
import { Link } from "react-router-dom"

function About() {
    return (
        <div className="pokeimg">
            <div className="background">

                <Link to="/">
                <div className="backButton">
                    <button className="butt">
                        Back to Pokedex
                        </button>

                </div>
            </Link>
            </div>
        </div>
    )
}

export default About