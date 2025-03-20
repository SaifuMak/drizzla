import React from 'react'

const ProductsDetails = ({item}) => {
    const [selectedMode, setSelectedMode] = React.useState('details');

    return (
        <div className="w-full min-h-[500px] ">
            <div className="w-full h-auto lg:space-y-10 p-10">

                <div className="">
                    <p className="text-lg-custom w-11/12 opacity-85 mb-4">{item.description}</p>
                </div>

                {/* Toggle buttons */}
                <div className="flex justify-between space-x-2 w-44 lg:w-48 p-[2px] rounded-full bor">
                    <button
                        onClick={() => setSelectedMode('video')}
                        className={`w-full ${selectedMode === 'video' ? 'bg-[#332F37]' : 'bg-transparent'} transform-all flex-center duration-200 py-1.5 rounded-2xl text-sm`}>
                        VIDEO
                    </button>
                    <button
                        onClick={() => setSelectedMode('details')}
                        className={`w-full ${selectedMode === 'details' ? 'bg-[#332F37]' : 'bg-transparent'} transform-all flex-center duration-200 py-1.5 rounded-2xl text-sm`}>
                        DETAILS
                    </button>
                </div>



                {/* Conditionally render */}
                <div className=" h-[500px]    overflow-hidden rounded-xl ">
                    {selectedMode === 'details' ? (
                        <ul className="space-y-2 p-10 rounded-xl h-full bor">
                            {item.details.map((detail, i) => (
                                <li key={i} className='pt-4 space-y-2'>
                                    <h4 className="font-semibold text-xl">{detail.subtitle}</h4>
                                    <p className='opacity-85 text-lg-custom'>{detail.content}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="w-full h-full rounded-2xl bor xl:max-h-[500px] lg:max-h-[400px] p-0.5   flex-center">
                            <video src={item.video} className="object-cover w-full h-full rounded-2xl " loop autoPlay muted ></video>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default ProductsDetails