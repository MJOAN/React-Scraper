import axios from "axios";
import Articles from "../pages/Articles";

export default {
  getNYTData: function() {
  const baseURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
  const apikey = "&api-key=9d4a8986921972b65754ea0809d47c84%3A12%3A74623931";
  const topicURL = baseURL + topic + apikey;

  axios({
    url: topicURL,
    method: "GET"
  })
  .then((response) => {
    console.log("data: ", response)
    this.setState({ docs: response.data.response.docs });
  })
  .catch((err) => {
    console.log("error", err)
  })
}



 /* },
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(data) {
    return axios.post("/api/articles", data);
  }*/
};


