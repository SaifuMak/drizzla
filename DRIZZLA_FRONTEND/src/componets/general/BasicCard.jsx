
import React from 'react'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'


const BasicCard = ({index, title, description, titleStyle, descriptionStyle, outerContainerStyle }) => {

    const BasicCardRef = useGsapFadeIn(index);

    return (
        <div key={index} ref={BasicCardRef} className={outerContainerStyle}>
            <h6 className={titleStyle}>{title}</h6>
            <p className={descriptionStyle}>{description}</p>
        </div>
    )
}

export default BasicCard