import React from 'react'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'
import useInitialGsapFade from '../../customHooks/useInitialGsapFade';
// import useInitialGsapFade from '../../customHooks/useInitialGsapFade';

const AnimatedDescription = ({ text, className, isIntiallyHidden=false }) => {

    const descriptionRef = isIntiallyHidden ? useInitialGsapFade() : useGsapFadeIn(0,{start:"top 72%"})
    // const ProductCardRef = useGsapFadeIn();
    // const ProductCardRef = useInitialGsapFade();

   

    return (
       <p ref={descriptionRef}  className={className}>{text}</p>
    )
}

export default AnimatedDescription