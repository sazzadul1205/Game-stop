import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const GameShop = ({ product }) => {
    const { name, price, companyName, image } = product;

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
             <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <div className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-48 md:h-60 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-lg md:text-xl">{name}</h2>
                        <p className="text-sm md:text-base">
                            If a dog chews shoes whose shoes does he choose?
                        </p>
                        <p className="text-sm md:text-base">{companyName}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary bg-blue-600 ">
                                {price ? `${price}$` : 'Free'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameShop;
