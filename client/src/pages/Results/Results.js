import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/Button/DeleteBtn";
import SavedBtn from "../../components/Button/SavedBtn";
import APIClient from "../../utils/APIClient";
import APIServer from "../../utils/APIServer";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from "../Main";

class Results extends Component {
  state = {    
    articles: {},
  };

  componentDidMount() {
    this.savedArticles();
  }

   savedArticles = () => {
     APIServer.savedArticles()
       .then(res =>
         this.setState({articles: res.data }))
       .catch(err => console.log(err));
   };

  deleteArticle = id => {
    APIServer.deleteArticle(id)
      .then(res => this.searchArticles())
      .catch(err => console.log(err));
  };
/*
 
  savedArticles = id => {
    APIServer.savedArticles(this.props.match.params.id)
    .then(res => this.setState({ article: res.data }))
    .catch(err => console.log(err));
  };

  handleSaveSubmit = event => {
  event.preventDefault();
    APIServer.savedArticles({
      headline: this.state.headline,
      snippet: this.state.snippet,
      web_url: this.state.web_url,
      pub_date: this.state.date
    })
      .then(res => this.saveArticle())
      .catch(err => console.log(err));
  };*/
    


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">

           <Jumbotron>
              <h1 className="text-center">
                <strong>(ReactJS) New York Times Scraper</strong>
              </h1>
              <h2 className="text-center">
                Search for and save articles of interest!
              </h2>
            </Jumbotron>
           </Col>
         </Row>
      
      <Row>
       <Col size="md-12">
        <Container>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                    <Container
                        key={this.article._id}
                        headline={article.headline} 
                        snippet={article.snippet}
                        web_url={article.web_url}
                        pub_date={article.pub_date}
                        //onClick={() => this.saveArticle(this.article._id)}
                        onClick={() => this.deleteArticle(this.article._id)}
                        buttonText="Delete Article"
                    />
                  ))}
                  </List>
              ) : (
                <h2 className="text-center">No Saved Articles</h2>
              )}
              </Container>
           </Col>
         </Row>
       </Container>

    );
  }
}

export default Results;
