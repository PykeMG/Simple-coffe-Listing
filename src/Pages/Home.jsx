import Backgorund from '../assets/bg-cafe.jpg'
import Collection from '../components/Collection';
import CoffeeCard from '../components/CoffeeCard';
import { useState, useEffect } from 'react';

const Api = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

const HomePage = () => {
    const [showAllProdutcs, setShowAllProducts] = useState(true)
    const [coffee, setCoffe] = useState([])

    const handleAllProducts = () => {
        setShowAllProducts(true)
        fetch(Api)
        .then(res => res.json())
        .then(data => setCoffe(data),
        )
    }
    const availableProducts = () => {
        setShowAllProducts(false)
        fetch(Api)
        .then(res => res.json())
        .then(data => setCoffe(data.filter(e => e.available)),
        )
    }
    useEffect(() => {
        handleAllProducts()
    }, [])

    return(
        <main className='bg-[#111315] min-h-screen relative flex flex-col items-center justify-center overflow-hidden'>
            <img src={Backgorund} alt="Coffee Shop" className='absolute top-0 lg:left-0 min-w-[300%] lg:min-w-[100%] xl:w-full z-0 h-auto' />
            <section className='bg-[#1B1D1F] rounded-xl mx-auto w-[380px] lg:w-[700px] xl:w-[1200px] px-10 lg:px-20 mt-40 mb-10 z-20 relative lg:my-36 xl:my-52'>
                <Collection />
                <div className='flex items-center gap-4 mt-2 text-[#FEF7EE] w-full justify-center mb-8'>
                    <button className='bg-[#6F757C] rounded-lg px-4 py-2' onClick={handleAllProducts} type='button' >All Products</button>
                    <button className='px-4 py-2' onClick={availableProducts} type='button' >Available Now</button>
                </div>
                <section className='grid xl:grid-cols-3 lg:grid-cols-2 gap-8'>
                {coffee.map((coffee) => (
                        <CoffeeCard key={coffee.id} name={coffee.name} price={coffee.price} image={coffee.image} rating={parseFloat(coffee.rating)} votes={coffee.votes} available={coffee.available} popular={coffee.popular} />
                ))}
                </section>
            </section>
        </main>
    );
};
export default HomePage