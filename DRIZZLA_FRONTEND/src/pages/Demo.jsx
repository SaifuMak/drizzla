import React from 'react'
import Stack from '../componets/layouts/Stack'
const Demo = () => {

    const cards = [
        {
            text: 'this is fierst ',
            description: 'sadsad csfdesddfwe ewrwer ewrewr wer ewr ewr ewrewr ewr ew rew r ewr ewr ewf eswd fdsfdsfds',
            color: '#669bbc'
        },
        {
            text: 'this is second ',
            description: 'sadsad csfdesddfwe ewrwer ewrewr wer ewr ewr ewrewr ewr ew rew r ewr ewr ewf eswd fdsfdsfds',
            color: '#bc6c25'
        }, {
            text: 'this is third ',
            description: 'sadsad csfdesddfwe ewrwer ewrewr wer ewr ewr ewrewr ewr ew rew r ewr ewr ewf eswd fdsfdsfds',
            color: '#588157'
        }, {
            text: 'this is forht  ',
            description: 'sadsad csfdesddfwe ewrwer ewrewr wer ewr ewr ewrewr ewr ew rew r ewr ewr ewf eswd fdsfdsfds',
            color: '#d5bdaf'
        }


    ]

    return (
        <>
            <div className="h-screen bg-black"></div>
            

            <div className="min-h-[3000px] bg-gray-500 px-10 py-10 flex gap-10">
                {/* LEFT sticky stacking container */}
                <div className="relative  w-48 shrink-0  ">
                    {cards?.map((card, index) => (
                        <div
                            key={index}
                            className="sticky  h-[300px] my-56 top-20 border p-4 mb-4"
                            style={{
                                backgroundColor: card.color,
                                zIndex: index + 1,
                            }}
                        >
                            {card.text}
                        </div>
                    ))}
                </div>

                {/* RIGHT normal scrollable content */}
                <div className="flex-1 space-y-20   h-[300px]">
                    {cards?.map((card, index) => (
                        <div key={index} className="space-y-4 my-56">
                            <p>{card.description}</p>
                            <p>{card.description}</p>
                            <p>{card.description}</p>
                            <p>{card.description}</p>
                            <p>{card.description}</p>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-screen bg-black"></div>


        </>
    )
}

export default Demo