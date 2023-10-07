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
        <div className="mx-5 my-5 md:mx-10 lg:mx-20"> 
            <div className="border" style={rainbowBorder}>
                <div className="flex flex-col lg:flex-row gap-5 p-3"> 
                    <div className="mx-auto my-auto">
                        <h3 className="text-lg text-center md:text-xl lg:text-2xl">{date}</h3>
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{name}</h1>
                    </div>
                    <div className="mx-auto my-auto ">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10 text-center md:text-left md:col-span-1 lg:col-span-1"> 
                            <div className="md:text-center md:my-auto"> 
                                <h1 className="text-base md:text-lg lg:text-xl">{team1Name}</h1>
                                <div className="avatar mx-auto md:mx-0"> 
                                    <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto md:mx-0"> 
                                        <img src={team1Image} alt={team1Name} className="w-full h-full object-cover object-center rounded-full" />
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-center my-auto text-xl md:text-3xl lg:text-4xl font-bold">VS</h2>
                            <div className="md:text-center md:my-auto"> 
                                <h1 className="text-base md:text-lg lg:text-xl">{team2Name}</h1>
                                <div className="avatar mx-auto md:mx-0"> 
                                    <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto md:mx-0"> 
                                        <img src={team2Image} alt={team2Name} className="w-full h-full object-cover object-center rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto my-auto">
                        <h3 className="text-2xl text-center md:text-3xl lg:text-4xl mb-3">{prizePool}</h3>
                        <div className="flex gap-5 text-lg">
                            <p className="text-base md:text-lg lg:text-xl">Watch:</p>
                            <BsTwitch className="text-2xl md:text-3xl lg:text-4xl" />
                            <BsYoutube className="text-2xl md:text-3xl lg:text-4xl" />
                            <BsTwitter className="text-2xl md:text-3xl lg:text-4xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;
