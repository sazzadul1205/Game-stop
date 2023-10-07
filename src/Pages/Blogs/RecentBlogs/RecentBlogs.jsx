
const RecentBlogs = ({ recentBlogs }) => {
    const { title, author, date, image } = recentBlogs;
    return (
        <div>
            <div className="w-1/4 my-4">
                <div className="card w-72 md:w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl">
                            {title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{author}</p>
                        <div className="card-actions mx-auto    ">
                            <div className="badge badge-outline">{date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;