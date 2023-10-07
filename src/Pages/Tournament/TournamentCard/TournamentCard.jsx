import { BsTwitch, BsTwitter, BsYoutube } from "react-icons/bs";

const TournamentCard = ({ tournament }) => {
    const { date, name, prizePool, team1Name, team2Name, team1Image, team2Image, streamingLink } = tournament;

    const rainbowBorder = {
        background: 'linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff3399)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        borderImage: 'linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff3399) 1',
    };
    return (
        <div className="mx-20 my-5">
            <div className="border" style={rainbowBorder}>
                <div className="grid grid-cols-3 p-3">
                    <div className="mx-auto my-auto">
                        <h3>{date}</h3>
                        <h1 className="text-3xl">{name}</h1>
                    </div>
                    <div className="flex gap-10">
                        <div>
                            <h1>{team1Name}</h1>
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={team1Image} alt={team1Name} />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center my-auto text-3xl font-bold">VS</h2>
                        <div>
                            <h1>{team2Name}</h1>
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={team2Image} alt={team2Name} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto my-auto">
                        <h3 className="text-5xl mb-3">{prizePool}</h3>
                        <div className="flex gap-5 text-xl  ">
                            <p className="text-3xi">Watch:</p>
                            <BsTwitch></BsTwitch>
                            <BsYoutube></BsYoutube>
                            <BsTwitter></BsTwitter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;
