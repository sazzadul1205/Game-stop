import Banner from "./Banner/Banner";
import { useEffect, useState } from "react";
import GamesCard from "./GamesCard/GamesCard";

const Home = () => {
    const [games, setGames] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('/games.json')
            .then(res => res.json())
            .then(data => setGames(data.games))
            .catch(error => console.log(error));
    }, []);

    const handleShowAllClick = () => {
        setShowAll(true);
    };

    return (
        <div className="bg-blue-200">
            <Banner />
            <div className="md:mx-10">
                <h2 className="text-center text-4xl font-extrabold text-blue-700 underline underline-offset-4 my-5">
                    Services
                </h2>

                <ul>
                    {games.slice(0, showAll ? undefined : 5).map(game => (
                        <GamesCard key={game.id} game={game}></GamesCard>
                    ))}
                </ul>

                {!showAll && (
                    <button
                        className="btn btn-primary my-5 bg-blue-500 hover:bg-blue-200 text-white mx-auto block"
                        onClick={handleShowAllClick}
                    >
                        Show All
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;
