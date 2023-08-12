import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
// create context
export const AppContext = createContext();

//create context provider
export default function AppContextProvider({children})
{
    const [loading, setLoading] = useState(false);
    const [posts, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    async function fetchData(page=1, tag=null, category=null)
    {
        setLoading(true)
        try {
            let url = `${baseUrl}?page=${page}`;
            if(tag) url+=`&tag=${tag}`;
            if(category) url+=`&category=${category}`;
            const response = await fetch(url);
            const output = await  response.json();
            console.log("output hai", output.posts)
            setPage(output.page);
            setTotalPage(output.totalPages);
            setPost(output.posts);
        } catch (error) {
            alert("error found");
            console.log(error);
            setPage(1);
            setPost([]);
            setTotalPage(null);           
        }
        setLoading(false)
    }
    // jab page pe next prev pe click hoga to ye function call hoga
    function pageChangeHandler(page)
    {   setPage(page)
        fetchData(page);
    }
    const value = {
        loading, setLoading, posts, setPost, page, setPage, totalPage, setTotalPage, fetchData, pageChangeHandler
    };
    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>);
}