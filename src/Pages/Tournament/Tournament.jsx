import { useEffect, useState } from 'react';
import cover from '../../assets/t-cover.jpg';
import TournamentCard from './TournamentCard/TournamentCard';

const Tournament = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        fetch('/tournament.json')
            .then((res) => res.json())
            .then((data) => setTournaments(data.tournaments))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="relative">
            <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${cover})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold">Game Tournaments</h1>
                        <p className="mb-5 text-lg md:text-xl">Let's watch the tournaments together</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {tournaments.map((tournament) => (
                        <TournamentCard key={tournament.id} tournament={tournament} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tournament;
