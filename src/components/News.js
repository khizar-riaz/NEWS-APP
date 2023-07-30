import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual NewsAPI API key
    const apiKey = "87c36225c3c84b73a6bdf5862565bfc7";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    // <div>
    //   <h1>Latest News</h1>
    //   <ul>
    //     {articles.map((article, index) => (
    //       <li key={index}>
    //        <img src={article. urlToImage}></img>
    //         <h2>{article.title}</h2>
    //         <p>{article.description}</p>
    //         <p>{article.source.name}</p>
    //         <h2>{article.author}</h2>
    //         <a href={article.url}>News Link</a>

    //       </li>
    //     ))}
    //   </ul>
    //   <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    // </div>
    <div className="container" >
      <h1>Latest News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <Card style={{ width: "29rem" }}>
              <Card.Img variant="top" src={article.urlToImage} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <p>{article.source.name}</p>
                <p>{article.author}</p>
                <Button  variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
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
