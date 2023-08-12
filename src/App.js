import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import './App.css';
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
export default function App() {
  const { fetchData} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const page = searchParams.get('page');
    if(location.pathname.includes('tags'))
    {
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchData(Number(page), tag);
    }
    else if(location.pathname.includes('catagories'))
    {
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchData(Number(page),null, category);
    }
    else fetchData(Number(page));
  }, [location.pathname, location.search])
  return (
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:blogId" element={<BlogPage/>}/>
        <Route path="/tags/:tag" element={<TagPage/>}/>
        <Route path="/categories/:category" element={<CategoryPage/>}/>
       </Routes>
  );
//   <div className=" w-screen h-screen overflow-y-auto overflow-auto-x-hidden flex flex-col gap-y-5 items-center  bg-gray-300">
//   <Header />
//  {
//    loading ? (<Spinner />) : (
//      <div className="w-full flex flex-col items-center gap-y-3 mb-3">
//        <Blogs/>
//        <Pagination />
//      </div>)
//  }

// </div>
}
