import { Link } from 'react-router-dom';

const GamesCard = ({ game }) => {
    const {id, name, price, description, image } = game;

    return (
        <div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <div className="hero bg-blue-500 my-5 w-10/12 m-auto py-5">
                    <div className="hero-content flex-col lg:flex-row gap-6">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt={name} />
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold">{name}</h1>
                            <p className="py-6">{description}</p>
                            <div className="flex items-center gap-5">
                                <p className="py-6">Price: {price === 0 ? "Free" : `$${price}`}</p>
                                <Link to={`game/${id}`} name={name}><button className="btn btn-primary bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamesCard;
