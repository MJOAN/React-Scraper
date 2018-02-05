import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import APIClient from "../../utils/apiClient";
import APIServer from "../../utils/apiServer";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  // Setting our component's initial state
  state = {
    articles: [],
    topic: "",
    title: "",
    url: "",
    date: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    //this.loadArticles();
  }

  // Loads all  and sets them to this.state
  loadArticles = () => {
    //load saved articles
    APIClient.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", url: "", date: "" })
      )
      .catch(err => console.log(err));
  };

    searchArticles = () => {
      console.log('searching',this.state.topic)
    APIClient.getArticles(this.state.topic)
      .then(res =>
        this.setState({ articles: res.data.response.docs, title: "", url: "", date: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    APIServer.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles()
   /*(this.state.title && this.state.author) {
      APIServer.saveArticle({
        title: this.state.title,
        url: this.state.url,
        date: this.state.date
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }*/
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>New York Times Article Scraper</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (optional)"
              />
              <FormBtn
                disabled={!this.state.topic}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => {
                  return (
                    <ListItem key={article._id}>
                      <a href={article.web_url}>
                        <strong>
                          {article.headline.main} 
                          {article.web_url}
                        </strong>
                      </a>
                      {article.byline ? article.byline.original : null} 
                      {article.pub_date} 
                      <FormBtn onClick={() => this.saveArticle(article._id)} />
                      <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
