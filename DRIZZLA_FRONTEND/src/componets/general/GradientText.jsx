import React from 'react'

const GradientText = ({ text, customClass }) => {
    return (
        <h2 className={` tracking-wider text-transparent ${customClass} bg-gradient-to-r from-purple-200 via-purple-900 to-purple-950 bg-clip-text`}>{text}</h2>
        
      
    )
}

export default GradientText