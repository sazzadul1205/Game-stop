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
        <div className="flex mx-10">
            <div className="w-1/4">
                {
                    recentBlogs.map(recentBlog => (<RecentBlogs key={recentBlog.id} recentBlogs={recentBlog}></RecentBlogs>))
                }
            </div>
            <div className="w-3/4">
                {
                    blogs.map(blog => (<Blog key={blog.id} blog={blog}></Blog>))
                }
            </div>
        </div>
    );
};

export default Blogs;
