import { React } from "react"
import ProtectPage from "../components/pageprotection";
import NewsList from "../components/newslist";

const News = () => {

  return (
    <div className = 'h-screen '>
      <ProtectPage notLoggedIn="/signin" loggedIn="/news" />
      <h1 className = "flex justify-center items-center relative top-[150px] select-none font-bold text-3xl"> 
        Trending News 
      </h1>
      <div className = "flex justify-center item-center h-full relative  top-[200px]">
        <NewsList>
        </NewsList>
      </div>
    
    </div>
  );
}

export default News;