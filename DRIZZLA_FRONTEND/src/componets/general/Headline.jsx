import React from 'react'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'
import useInitialGsapFade from '../../customHooks/useInitialGsapFade';
// import useInitialGsapFade from '../../customHooks/useInitialGsapFade';

const Headline = ({ text, className, isIntiallyHidden=false }) => {

    const textRef = isIntiallyHidden ? useInitialGsapFade() : useGsapFadeIn()
    // const ProductCardRef = useGsapFadeIn();
    // const ProductCardRef = useInitialGsapFade();

   

    return (
       <h2 ref={textRef}  className={className}>{text}</h2>
    )
}

export default Headline