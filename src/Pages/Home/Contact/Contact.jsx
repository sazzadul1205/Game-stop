const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold text-blue-600 mb-3">Contact Us</h2>
                <div className="flex flex-col">                
                    <input
                        className="border border-gray-400 rounded p-2 my-2"
                        placeholder="Email@example.com"
                        type="email"
                        name=""
                        id=""
                    />
                    <textarea
                        className="border border-gray-400 rounded p-2 my-2"
                        placeholder="Message*"
                        name="Message"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
            </div>
            <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold text-blue-600 mb-3">Latest News</h2>
                <h1 className="text-xl font-semibold text-black mt-2" >Next-Gen Consoles: </h1>
                <p>The release of next-generation gaming consoles like the PlayStation 5 and Xbox Series X/S brought about a new era of gaming with improved graphics, faster load times, and innovative features.</p>
                <h1 className="text-xl font-semibold text-black mt-2" >Rise of Battle Royale Games: </h1>
                <p>Games like "Fortnite," "Apex Legends," and "Warzone" continued to dominate the battle royale genre, attracting millions of players worldwide.</p>
                <h1 className="text-xl font-semibold text-black mt-2" >Indie Game Success </h1>
                <p> Indie games such as "Hades," "Among Us," and "Valheim" gained widespread popularity, showcasing the potential for small studios to create hit titles.</p>
            </div>
        </div>
    );
};

export default Contact;
