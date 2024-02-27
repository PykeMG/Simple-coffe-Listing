import vector from '../assets/vector.svg'
const Collection = () => {
    return(
        <section className="flex flex-col items-center max-w-xl mx-auto pt-24 pb-10 relative text-center">
            <img src={vector} className='absolute z-0 size-56 right-0 top-0' alt="" />
            <h2 className="text-[#FEF7EE] text-3xl font-semibold mb-4 z-10">Our Collection</h2>
            <p className="text-[#6F757C] z-10">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>

            <div className='flex items-center gap-4 mt-4 text-[#FEF7EE]'>
                <button className='bg-[#6F757C] rounded-lg px-4 py-2'>All Products</button>
                <button className='px-4 py-2'>Available Now</button>
            </div>
        </section>
    )
}

export default Collection