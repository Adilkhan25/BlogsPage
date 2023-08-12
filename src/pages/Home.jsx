import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import Header from "../components/Header";

import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";
const Home = () => {
    const {loading} = useContext(AppContext)
    return (
        <div className=" w-screen h-screen overflow-y-auto overflow-auto-x-hidden flex flex-col gap-y-5 items-center  bg-gray-300">
            <Header />
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
export default Home;