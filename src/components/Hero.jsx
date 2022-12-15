import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from "styled-components"
import Link from "./Link"

const HeroStyles = styled.div`
  .gatsby-image-wrapper {
    height: 100vh;
    width: 100%;
    position: relative;
    }

    .hello__wrapper {
        display: flex;
        align-items: center;
        position: absolute;
        color: white;
        font-size: 2rem;
        z-index: 2;
        margin-top: 25%;
        padding: 0 2rem;

        a {
            margin-left: 1rem;
            background: none;
            text-decoration: none;
            box-shadow: none;
            border-color: transparent;
            color: white;
            /* width: 2rem; */
            font-size: 1.5rem;
        }
    }
  `

const Hero = ({image}) => {
  return (
    <HeroStyles>
    <div className="hello__wrapper">
       <h1>sam finney</h1>
       <a className="scroll-down" href="#main-page">&darr;</a> 
    </div>
    
    <GatsbyImage className="hero-image" image={getImage(image)}/>
    </HeroStyles>
  )
}

export default Hero