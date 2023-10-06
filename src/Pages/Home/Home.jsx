import Banner from "./Banner/Banner";
import { useEffect, useState } from "react";
import GamesCard from "./GamesCard/GamesCard";
import GameShop from "./GameShop/GameShop";
import Contact from "./Contact/Contact";

const Home = () => {
    const [games, setGames] = useState([]);
    const [products, setProducts] = useState([]);
    const [showAllGames, setShowAllGames] = useState(false);
    const [showAllProducts, setShowAllProducts] = useState(false);

    useEffect(() => {
        fetch('/games.json')
            .then(res => res.json())
            .then(data => setGames(data.games))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(error => console.log(error));
    }, []);

    const handleShowAllGamesClick = () => {
        setShowAllGames(true);
    };

    const handleShowAllProductsClick = () => {
        setShowAllProducts(true);
    };

    return (
        <div className="bg-blue-200">
            <Banner />
            <div className="md:mx-10">
                <h2 className="text-center text-4xl font-extrabold text-blue-700 underline underline-offset-4 my-5">
                    Services
                </h2>
                <ul>
                    {games.slice(0, showAllGames ? undefined : 5).map(game => (
                        <GamesCard key={game.id} game={game}></GamesCard>
                    ))}
                </ul>
                {!showAllGames && (
                    <button
                        className="btn btn-primary my-5 bg-blue-500 hover:bg-blue-200 text-white mx-auto block"
                        onClick={handleShowAllGamesClick}>Show All</button>
                )}
            </div>
            <div className="my-10 mx-10">
                <h2 className="text-center text-4xl font-extrabold my-5">Game <span className="text-blue-700">Shop</span></h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {products.slice(0, showAllProducts ? undefined : 3).map(product => (
                        <GameShop key={product.id} product={product}></GameShop>
                    ))}
                </ul>
                {!showAllProducts && (
                    <button
                        className="btn btn-primary my-5 bg-blue-500 hover:bg-blue-200 text-white mx-auto block"
                        onClick={handleShowAllProductsClick}>Show All</button>
                )}
            </div>
            <div className="my-5 mx-10">
                <h2 className="text-center text-4xl font-extrabold my-5">Top Brands. Take Your Pick.</h2>
                <Contact></Contact>


            </div>
        </div>
    );
};

export default Home;
