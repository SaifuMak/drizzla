import React from 'react'
import useGsapOpacity from '../../customHooks/useGsapOpacity'

const OpacityAnimatedDescription = ({text, className}) => {

    const opacityDescriptionRef = useGsapOpacity({start:"top 65%"}) 


  return (
    <p ref={opacityDescriptionRef}  className={className}>{text}</p>

  )
}

export default OpacityAnimatedDescription