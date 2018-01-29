import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  // Setting our component's initial state
  state = {
    articles: [],
    topic: "",
    title: "",
    snippet: "",
    date: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadArticles();
  }

  // Loads all  and sets them to this.state
  loadArticles = () => {
    API.getNYTData()
      .then(res =>
        this.setState({ articles: res.data, topic: "", title: "", snippet: "", date: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
/*  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };
*/
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic || this.state.date) {
      API.getNYTData({
        title: this.state.title,
        date: this.state.date
      })
        .then(res => this.getNYTData())
        .catch(err => console.log(err));
    }
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
                disabled={!(this.state.topic || this.state.date)}
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
                      <a href={"/articles/" + article._id}>
                        <strong>
                          {article.title} by {article.date}
                        </strong>
                      </a>
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
