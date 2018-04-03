import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import APIClient from "../../utils/apiClient";
import APIServer from "../../utils/apiServer";

class Results extends Component {
  state = {
    article: {}
  };

  // When this component mounts, grab the  _id of this.props.match.params.id
  // e.g. localhost:3000/articles/599dcb67f0f16317844583fc

  componentDidMount() {
    APIServer.getArticle(this.props.match.params.id)
      .then(res => this.setState({ article: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>New York Times Article Results</h1>
              <h3>{this.state.article.title} {this.state.article.date} {this.state.article.url} </h3>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Main Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Results;
