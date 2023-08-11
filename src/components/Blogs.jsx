import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
    // context se data leke aao 
    const {posts, loading } = useContext(AppContext);
    console.log("array in blogs, ",posts)
    console.log(posts);
    return (
        <div className="flex flex-col gap-y-4 w-9/12 max-w-[1160px] py-3 px-6  bg-gray-300">
            {
                loading ?
                    (<Spinner />) :
                    (
                        posts.length === 0 ?
                            (<div>No post found</div>) :
                            (
                                posts.map((post) => (
                                    <div key={post.id} className="flex flex-col gap-y-2 my-3">
                                        <p className="text-2xl font-bold">{post.title}</p>
                                        <p className="text-[20px] ">By <span>{post.author}</span> on <span>{post.category}</span></p>
                                        <p className="text-[20px] ">Posted on <span>{post.date}</span></p>
                                        <p className="text-[18px]">{post.content}</p>
                                        <div>
                                            {
                                                post.tags.map((tag, index) => {
                                                    return <span className="underline mx-1 text-blue-800 underline " key={index}>#{tag}</span>
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                                )
                            )
                    )
            }
        </div>
    );
}
export default Blogs;