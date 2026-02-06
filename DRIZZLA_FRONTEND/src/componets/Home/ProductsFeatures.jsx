import { ProductsFeatureData } from '../../datas/ProductsFeatureData'
import AbilitiesCard from './AbilitiesCard'

function ProductsFeatures() {
    return (
        <div className="w-11/12 xl:w-10/12 xl:pb-12 2xl:pb-28">
            <div className="grid gap-8 text-white md:grid-cols-3 md:gap-5 lg:gap-16 2xl:gap-y-20 2xl:gap-x-16 ">
                {ProductsFeatureData?.map((data) => (
                    <AbilitiesCard key={data.index} data={data} />
                ))}
            </div>
        </div>
    )
}

export default ProductsFeatures