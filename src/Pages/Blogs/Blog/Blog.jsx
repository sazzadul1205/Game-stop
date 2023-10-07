const Blog = ({ blog }) => {
    const { title, description, image } = blog;
    return (
        <div>
            <div className="hero bg-base-200 py-5">
                <div className="hero-content text-center">
                    <div className="max-w-md flex flex-col items-center mx-auto">
                        <figure className="">
                            <img className="w-full mb-5" src={image} alt="" />
                        </figure>
                        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
