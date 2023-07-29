import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual NewsAPI API key
    const apiKey = '87c36225c3c84b73a6bdf5862565bfc7';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;


// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {
//   render() {
//     return (
//       <div>News
//         <NewsItem/>
//       </div>
//     )
//   }
// }

// export default News
