import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
    // context se data leke aao 
    const {posts, loading } = useContext(AppContext);
    console.log("array in blogs, ",posts)
    console.log(posts);
    return (
        <div className="flex flex-col gap-y-4 w-8/12 max-w-[1160px] py-3 px-6  bg-gray-300">
            {
                loading ?
                    (<Spinner />) :
                    (
                        posts.length === 0 ?
                            (<div>No post found</div>) :
                            (
                                posts.map((post) => (
                                <Card key={post.id} post = {post} />
                                )
                                )
                            )
                    )
            }
        </div>
    );
}
export default Blogs;