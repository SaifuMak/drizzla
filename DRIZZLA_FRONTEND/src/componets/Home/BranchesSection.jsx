import { Branches } from '../../datas/Branches'
import BranchCard from './BranchCard'
import Headline from '../general/Headline'

function BranchesSection() {
    return (
        <div className="flex flex-col w-11/12 mt-24 text-white xl:mt-32 xl:w-10/12">
            <Headline text='Our offices' className='text-3xl md:text-4xl xl:text-5xl max-lg:pl-2' />

            <div className="grid gap-8 mt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-12 2xl:gap-16">

                {Branches?.map((branch, index) => (
                    <BranchCard key={index} branch={branch} index={index} />
                ))}
            </div>
        </div>
    )
}

export default BranchesSection