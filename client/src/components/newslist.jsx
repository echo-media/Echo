import React , {useEffect, useState} from "react"


const NewsList = () => {

    const [articles, setArticles] = useState([])

    const apiKey = process.env.REACT_APP_NYT_KEY
    const apiUrl = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`

    fetch(apiUrl) 
      .then((response) => response.json())
      .then((data) => {

        const topArticles = data.results.slice(2, 50)
        setArticles(topArticles)
      }) 
      .catch((error) => console.log(error)) 

      


    return (
      <div>
        <ul> 
          {articles.map((article, index) => (
            <li key={index}>
            <a href = {article.url} target="_blank">
              <div className = "bg-zinc-500 rounded-md h-auto ">
                
                  <div className = "flex justify-center mt-8 pt-4">
                    {article.title}
                  </div>
                  <br></br> 
                  <div className = "flex justify-center mb-8 p-4">
                    {article.abstract}
                  </div>
              
              </div>
            </a>
          </li>
          ))}
        </ul>

      </div>
        
    )
}

export default NewsList;