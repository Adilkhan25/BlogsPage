import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
const TagPage = () => {
    const {loading} = useContext(AppContext);
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    const navigate = useNavigate();
    return (
        <div className=" w-screen h-screen overflow-y-auto overflow-auto-x-hidden flex flex-col gap-y-5 items-center  bg-gray-300">
            <Header />
            <div className="flex gap-x-3 items-center py-1 px-3 w-9/12 max-w-[1160px] mt-2 mb-2 mx-4">
            <button onClick={()=>navigate(-1)}  className="border border-gray-500 rounded-[10px] cursor-pointer py-1 w-[150px] text-[18px] text-center">Back</button>
                <h1 className="text-1xl font-bold">Blogs tagged <span>#{tag}</span></h1>
            </div>
            {
                loading ? (<Spinner />) : (
                    <div className="w-full flex flex-col items-center gap-y-3 mb-3">
                        <Blogs />
                        <Pagination />
                    </div>)
            }

        </div>
    )
}
export default TagPage;