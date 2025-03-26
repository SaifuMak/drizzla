import React from 'react'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'

const Headline = ({ text, className }) => {

    const ProductCardRef = useGsapFadeIn();

    return (
       <h2 ref={ProductCardRef}  className={className}>{text}</h2>
    )
}

export default Headline