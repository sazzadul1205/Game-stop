import React from 'react';
import banner1 from '../../../assets/banner-1.png';
import banner2 from '../../../assets/banner-2.png';
import banner3 from '../../../assets/banner-3.jpeg';
import banner4 from '../../../assets/banner-4.png';
import banner5 from '../../../assets/banner-5.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full my-2 relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full h-[400]" alt="Banner 1" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Play Assassins Creed</h1>
                        <p className="text-base md:text-lg md:w-1/2 hidden md:block">An action-adventure game series that takes players on a historical journey as assassins in different time periods, featuring stealthy gameplay, parkour-style movement, and engaging narratives.</p>
                        <Link to={'/game/1'}><button className="btn btn-primary text-sm md:text-base mt-5">Learn More</button></Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full h-[400]" alt="Banner 2" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Minecraft</h1>
                        <p className="text-base md:text-lg md:w-1/2 hidden md:block">A sandbox game that allows players to build and explore blocky, procedurally generated worlds, mine resources, craft items, and engage in creative or survival gameplay.</p>
                        <Link to={'/game/2'}><button className="btn btn-primary text-sm md:text-base mt-5">Learn More</button></Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full h-[400]" alt="Banner 3" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Genshin Impact</h1>
                        <p className="text-base md:text-lg md:w-1/2 hidden md:block">An open-world action role-playing game known for its stunning visuals, where players explore the fantasy realm of Teyvat, wield elemental powers, and embark on an epic quest to find their lost sibling.</p>
                        <Link to={'/game/3'}><button className="btn btn-primary text-sm md:text-base mt-5">Learn More</button></Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full h-[400]" alt="Banner 4" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Factorio</h1>
                        <p className="text-base md:text-lg md:w-1/2 hidden md:block">A real-time strategy game focused on automation and resource management, where players build intricate factories to produce items, manage supply chains, and optimize their industrial processes.</p>
                        <Link to={'/game/4'}><button className="btn btn-primary text-sm md:text-base mt-5">Learn More</button></Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide5" className="carousel-item relative w-full">
                    <img src={banner5} className="w-full h-[400]" alt="Banner 5" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">League of Legends</h1>
                        <p className="text-base md:text-lg md:w-1/2 hidden md:block">A popular multiplayer online battle arena (MOBA) game where players form teams to compete in fast-paced, tactical battles using a roster of diverse champions, each with unique abilities, in an effort to destroy the enemy's Nexus.</p>
                        <Link to={'/game/5'}><button className="btn btn-primary text-sm md:text-base mt-5">Learn More</button></Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
