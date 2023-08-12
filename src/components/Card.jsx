import { NavLink } from "react-router-dom";

const Card = (props) => {
    const post = props.post;
    return (
        <div className="flex flex-col gap-y-2 my-3 ">
        <p className="text-2xl font-bold">{post.title}</p>
            <p className="text-[20px] ">By <span>{post.author}</span> on  <span> </span>
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}><span>{post.category}</span></NavLink>
            </p>
            <p className="text-[20px] ">Posted on <span>{post.date}</span></p>
            <p className="text-[18px]">{post.content}</p>
            <div>
                {
                    post.tags.map((tag, index) => {
                        return <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                            <span className="underline mx-1 text-blue-800 underline ">#{tag}</span>
                        </NavLink>
                    })
                }
            </div>
        </div>
    )
}
export default Card;