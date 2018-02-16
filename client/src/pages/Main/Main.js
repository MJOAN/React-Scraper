import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/Button/DeleteBtn";
import SavedBtn from "../../components/Button/SavedBtn";
import APIClient from "../../utils/APIClient";
import APIServer from "../../utils/APIServer";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Results from "../Results";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
    state = {
        articles: [],
        topic: "",
        date: "",
        headline: "",
        snippet: "",
        web_url: "",
        pub_date: ""
    };

  componentDidMount() {
   // this.loadArticles();
   // this.searchArticles();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  searchArticles = () => {
    console.log('search articles topic: ',this.state.topic)
  APIClient.getArticles(this.state.topic)
    .then(res =>
      this.setState({ articles: res.data.response.docs}) // , headline: "", snippet: "", web_url: "", date: "" 
    )
    .catch(err => console.log(err));
  };

/*  loadArticles = () => {
  APIClient.getArticles({
      topic: this.state.topic
     })
    .then(res => this.setState({ 
      articles: res.data     //response.docs, headline: "", web_url: "", snippet: "", pub_date: "" 
    }))
    .catch(err => console.log(err));
  };*/

    // Loads all  and sets them to this.state
/*  loadArticles = () => {
    console.log('saved articles', this.state.articles)
  APIClient.getArticles()
    .then(res =>
      this.setState({ articles: res.data, headline: "", snippet: "", web_url: "", pub_date: "" })
    )
    .catch(err => console.log(err));
  };*/


  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(); 
  };

  saveArticle = id => {
    const article = this.state.articles.find(article => article._id === id);
    APIServer.saveArticle(article)
      .then(res => this.saveArticle())
      .catch(err => console.log(err));
  };

   render() {
     return (
       <Container>
         <Row>

           <Col size="md-12">
           </Col>

           <Col size="md-12">
            <form>
            <h4>
                <strong>Topic</strong>
               </h4>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <h4>
                <strong>Year [Optional]</strong>
              </h4>
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (optional)"
              />
              <FormBtn
                disabled={!this.state.topic || this.state.date}
                onClick={this.handleFormSubmit}
                type="submit"
                >
                Search Articles
              </FormBtn>
              </form>
         </Col>
         
            <Container>
               {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => {
                  return (
                    <ListItem key={article._id}>
                      <a href={article.web_url}>
                        <div>
                          {article.headline.main} 
                          {article.web_url}
                        </div>
                      </a>
                        <div>
                          {article.byline ? article.byline.original : null} 
                          {article.pub_date} 
                        </div>
                        <div>
                      <SavedBtn onClick={() => this.saveArticle(article._id)} />
                      </div>
                    </ListItem>
                  );
                })}
              </List>

            ) : (
              <h3>No Results to Display</h3>
            )}
            </Container>
        </Row>
      </Container>
     );
   }
 }



export default Main;