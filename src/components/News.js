import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
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
      <h1 className="py-3">Latest News</h1>
      <div className="container">
      <h1 className="py-3">Latest News</h1>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card style={{ backgroundColor: '#1b2f36', color: 'white', height: '100%' }}>
              <Card.Img
                variant="top"
                src={article.urlToImage}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <p className="text-right mb-0" style={{ fontStyle: 'italic', flexGrow: 1 }}>
                  {article.source.name} - {article.author}
                </p>
                <Button variant="primary" className="w-100 mt-auto" style={{ backgroundColor: '#fa933d', paddingBottom: 0 }}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  
    </div>
  );
};

export default News;

