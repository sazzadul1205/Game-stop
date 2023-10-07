import { useEffect, useState } from "react";
import RecentBlogs from "./RecentBlogs/RecentBlogs";
import Blog from "./Blog/Blog";

const Blogs = () => {
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/recentBlogs.json')
            .then(res => res.json())
            .then(data => setRecentBlogs(data.recentBlogs))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data.blogs)) 
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="flex flex-col md:flex-col-reverse lg:flex-row mx-5 lg:mx-20">
            <div className="w-full md:ml-36 md:w-1/4 mb-8 md:mb-0 order-2 md:order-1"> 
                {
                    recentBlogs.map(recentBlog => (
                        <RecentBlogs key={recentBlog.id} recentBlogs={recentBlog}></RecentBlogs>
                    ))
                }
            </div>
            <div className="w-full mx-auto md:w-3/4 order-1 md:order-2">
                {
                    blogs.map(blog => (
                        <Blog key={blog.id} blog={blog}></Blog>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;
