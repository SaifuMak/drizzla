import React from 'react'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'

const Title = ({ text }) => {
  const titleRef = useGsapFadeIn()
  return (
    <h2 ref={titleRef} className="text-3xl text-white opacity-0 lg:text-4xl xl:text-5xl md:text-center xl:mb-16">{text}</h2>

  )
}

export default Title