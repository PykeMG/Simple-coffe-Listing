import PropTypes from "prop-types"
import Star from '../assets/Star.svg'
import Star_fill from '../assets/Star_fill.svg'

const CoffeeCard = ({name, price, image, rating, votes, available, popular}) => {
    return(
        <section>
                <div className="rounded-lg shadow relative">
                    <img className="rounded-lg w-full" src={image} alt="" />
                    {popular ? <p className="bg-[#F6C768] rounded-full absolute top-0 left-0 mt-3 ml-3 py-1 px-4">Popular</p> : ''}
                <div className="py-5">
                <div className="w-full flex justify-between items-center">
                    <h5 className="xl:mb-2 text-base xl:text-2xl font-semibold text-white">{name}</h5>
                    <p className="bg-[#BEE3CC] rounded-md px-3 py-1 font-semibold">{price}</p>
                </div>
                <div className="text-[#6F757C] font-semibold flex justify-between py-2 my-2">
                    { rating ? 
                    (<p className="flex items-center gap-x-2"><img src={Star_fill} alt=""/><span className="text-white">{rating}</span> ({votes}votes)</p>)
                    :
                    (<p className="flex items-center gap-x-2"><img src={Star} alt=""/><span>Not Rating</span></p>)}
                        {available ? '' : <p className="text-[#ED735D]">Sold Out</p>}
                </div>                                
                </div>
            </div>
        </section>
    )
}

CoffeeCard.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    votes: PropTypes.number,
    available: PropTypes.bool,
    popular: PropTypes.bool,
};

export default CoffeeCard
