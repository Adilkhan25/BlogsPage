import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import Card from "../components/Card";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const { setLoading, loading } = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();
    const blogId = location.pathname.split("/").at(-1);
    async function fetchRelatedBlogData() {
        setLoading(true)
        try {
            const url = `${baseUrl}?blogId=${blogId}`;
            const response = await fetch(url);
            const output = await response.json();
            setBlog(output.blog);
            console.log("output in blogs ", output)
            setRelatedBlogs(output.relatedBlogs);
        } catch (error) {
            console.log("Unable to fetch data");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false)
    }
    useEffect(
        () => {
            fetchRelatedBlogData();
        }, [location.pathname]
    );
    return (
        <div className=" w-screen h-screen overflow-y-auto overflow-auto-x-hidden flex flex-col gap-y-5 items-center  bg-gray-300">
            <Header />
            {
                loading ? (<Spinner />) : (
                    <div className="w-full flex flex-col items-center gap-y-3 mb-3">
                        <button onClick={() => navigate(-1)}
                            className="border border-gray-500 rounded-[10px] cursor-pointer py-1 w-[150px] text-[18px] text-center">Back</button>
                        {
                            blog ? (
                                <div>
                                    <Card post={blog} />
                                    <h2>Related blogs</h2>
                                    relatedBlogs.map((blog)=>(<Card key={blog.id} post={blog}/>))
                                </div>)
                                : (<div>No Blogs found</div>)
                        }
                    </div>)
            }

        </div>
    );

}
export default BlogPage;