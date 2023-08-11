import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = ()=>{
    const {page, totalPage, pageChangeHandler} = useContext(AppContext);
    return( 
       <div className="flex justify-evenly w-full py-2 sticky z-50 bg-gray-300 bottom-0 border-t-[2px] border-gray-400">
           <div className="flex gap-x-2">
           {
            page>1 &&
            <button onClick={()=>pageChangeHandler(page-1)}
            className="border border-gray-500 rounded-[10px] cursor-pointer py-1 w-[150px] text-[18px] text-center">Prev</button>
           }
           {
            page<totalPage &&
            <button onClick={()=>pageChangeHandler(page+1)}
            className="border border-gray-500 rounded-[10px] cursor-pointer py-1 w-[150px] text-[18px] text-center">Next</button>
           }
           </div>
           <p className="text-[16px] font-bold">page <span>{page}</span> of <span>{totalPage}</span></p>
       </div>
    );
}
export default Pagination;