import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const GamesCard = ({ game }) => {
    const { name, price, description, image } = game;

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <div className="hero bg-blue-500 my-5 w-10/12 m-auto py-5">
                <div className="hero-content flex-col lg:flex-row gap-6">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt={name} />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <div className="flex items-center gap-5"> 
                            <p className="py-6">Price: {price === 0 ? "Free" : `$${price}`}</p>
                            <button className="btn btn-primary">Show Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamesCard;
