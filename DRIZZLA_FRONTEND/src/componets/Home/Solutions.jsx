import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Headline from '../general/Headline'
import { SolutionsData } from '../../datas/Solutions'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'

function Solutions() {

    const solutionListRef = useGsapFadeIn(0, { start: 'top 70%' })
    const solutionsImageRef = useGsapFadeIn(0, { start: 'top 73%' })
    const [selectedSolution, setselectedSolution] = useState(SolutionsData[0])
  const [fade, setFade] = useState(false);


    const handleChangeSolution = (solution) => {
        if (solution === selectedSolution) {
            return
        }
        setFade(true);
        setTimeout(() => {
            setselectedSolution(solution);
            setFade(false);
        }, 300); // 300ms fade-out before changing
    };



    return (
        <div id="solutions" className="flex w-11/12 mt-12 text-white md:mt-32 max-md:flex-col-reverse 2xl:mt-20 xl:w-10/12 md:space-x-6 lg:space-x-12 xl:space-x-16 2xl:space-x-24 ">

            <div className="mt-4 lg:w-1/2 max-md:pt-5 ">
                {/* <h2 className="mb-6 text-4xl md:mb-10 max-sm:text-3xl ">Our solutions tailored to your industry</h2> */}
                <Headline text='Our solutions tailored to your industry' className='mb-6 text-3xl md:mb-10 md:text-4xl xl:text-5xl max-lg:pl-2 ' />
                <div ref={solutionListRef} className="">

                    {SolutionsData?.map((solution, index) => (
                        <React.Fragment key={index}>
                            <div onClick={() => handleChangeSolution(solution)} className={`2xl:py-5 xl:py-4 max-sm:hidden   md:py-2 py-1.5 md:pl-8  transition-all duration-300 ease-in-out border-gray-100  ${index === 0 ? 'border-t-2 border-b-2' : 'border-b-2'} ${selectedSolution.title === solution.title ? 'font-semibold' : 'font-extralight text-stone-300'} cursor-pointer md:text-xl xl:text-[26px]  tracking-wider  border-opacity-30 `}>{solution.title}</div>
                            <Link to={solution.url} className='block'> <div className={` sm:hidden   py-2.5   transition-all duration-300 ease-in-out border-gray-100  ${index === 0 ? 'border-t-2 border-b-2' : 'border-b-2'} font-light text-white/70 tracking-wider  border-opacity-30 `}>{solution.title}</div></Link>
                        </React.Fragment>
                    ))}
                </div>
            </div>


            <div className="relative flex items-center justify-center lg:w-1/2 max-sm:hidden ">
                {/* <h2 className="absolute mb-10 text-3xl text-center -top-20 md:hidden ">Our solutions tailored to your industry</h2> */}
                <Headline text='Our solutions tailored to your industry' className='absolute mb-10 text-3xl text-center -top-20 md:hidden ' />

                <div ref={solutionsImageRef} className="w-full h-full overflow-hidden rounded-xl ">
                    <img src={selectedSolution.image} alt="" className={`object-cover w-full h-full rounded-xl transition-opacity  duration-500 ease-in-out ${fade ? 'opacity-50' : 'opacity-100'
                        }`}

                    />
                </div>
                <div className="absolute w-full text-black bottom-4 flex-center md:bottom-10 ">
                    <div className="w-11/12 p-4 bg-white lg:p-5 xl:p-7 2xl:px-12 2xl:py-10 rounded-xl">
                        <h5 className="text-xl font-semibold md:text-2xl xl:text-3xl ">{selectedSolution?.title}</h5>
                        <p className="md:mt-4 max-md:text-sm lg:text-lg xl:text-xl">{selectedSolution?.description}</p>
                        <Link to={selectedSolution?.url}> <button className="px-3 py-1 mt-4 text-white transition-transform duration-300 rounded-full max-sm:text-sm md:px-8 md:py-3 xl:text-lg hover:bg-gradient-to-b hover:from-sky-500/80 hover:to-purple-500/80 bg-gradient-to-b from-purple-500/80 to-sky-500/80 ">EXPLORE SOLUTIONS</button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions