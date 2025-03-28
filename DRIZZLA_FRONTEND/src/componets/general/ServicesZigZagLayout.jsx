import React from 'react'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from "react-icons/cg";
import useGsapFadeIn from '../../customHooks/useGsapFadeIn';
import useGsapOpacity from '../../customHooks/useGsapOpacity';
import ServicesImageZigZag from './ServicesImageZigZag';
import ServicesContentZigZag from './ServicesContentZigZag';


const ServicesZigZagLayout = ({ datas }) => {

    return (
        <div className="flex justify-center ">
            <div className="my-2 xl:space-y-24 2xl:space-y-32">
                {datas?.map((data, index) =>

                (
                    <div
                        key={index}
                        className="flex items-center my-16 text-white max-md:flex-col max-md:my-10"
                    >
                        <ServicesImageZigZag data={data} index={index} />

                        {/* Reverse Order for Odd Index */}
                        <ServicesContentZigZag data={data} index={index} />

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesZigZagLayout