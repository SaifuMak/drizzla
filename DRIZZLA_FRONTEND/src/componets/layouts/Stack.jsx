import React from 'react'

const Stack = ({ data }) => {
    return (
        <div className=" flex pb-20 my-10" style={{ backgroundColor: data.color }}>
            <div className="size-48  border-2 sticky top-0  bg-slate-100  " >{data.text} </div>
            <div className="">{data.descprition}</div>
        </div>

    )
}

export default Stack