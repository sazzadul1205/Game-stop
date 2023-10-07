import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GameDetails = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const apiUrl = "/games.json";

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const gamesData = data.games;
                for (let i = 0; i < gamesData.length; i++) {
                    if (gamesData[i].id.toString() === id) {
                        setGame(gamesData[i]);
                        setLoading(false);
                        return;
                    }
                }
                setGame(null);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching game data:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (game === null) {
        return <div>Game not found</div>;
    }

    return (
        <div>
            <section className=" body-font bg-blue-300">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt={game.name} src={game.image} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-950">{game.name}</h1>
                        <p className="mb-8 leading-relaxed text-xl text-blue-800">{game.description}</p>
                        <div className="container mx-auto mb-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center">
                                <div className="p-5 bg-blue-700 rounded-xl">
                                    <span className="font-bold text-xl text-white">Release Date:</span>
                                    <p className="text-white mt-2">{game.releaseDate}</p>
                                </div>
                                <div className="p-5 bg-blue-700 rounded-xl">
                                    <span className="font-bold text-xl text-white">Downloads:</span>
                                    <p className="text-white mt-2">{game.downloads} Million</p>
                                </div>
                                <div className="p-5 bg-blue-700 rounded-xl">
                                    <span className="font-bold text-xl text-white">Average Play Time:</span>
                                    <p className="text-white mt-2">{game.averagePlayTime}</p>
                                </div>
                                <div className="p-5 bg-blue-700 rounded-xl">
                                    <span className="font-bold text-xl text-white">IGN Rating:</span>
                                    <p className="text-white mt-2">{game.rating}</p>
                                </div>
                                <div className="p-5 bg-blue-700 rounded-xl">
                                    <span className="font-bold text-xl text-white">Genre:</span>
                                    <p className="text-white mt-2">{game.genre}</p>
                                </div>
                                <div className="p-5 bg-blue-700 rounded-xl">
                                    <span className="font-bold text-xl text-white">platforms:</span>
                                    <p className="text-white mt-2">{game.platforms[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-center my-5 text-3xl font-bold text-blue-700">
                                {game.price === 0 ? "Price: Free" : `Price: $${game.price}`}
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <button className="btn btn-primary w-1/4">Buy</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GameDetails;
