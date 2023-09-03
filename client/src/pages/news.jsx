import { React } from "react"
import ProtectPage from "../components/pageprotection";

const News = () => {

  ProtectPage("/signin", "/news")
  return (
    <div className = "h-screen">

    </div>
  );
}

export default News;