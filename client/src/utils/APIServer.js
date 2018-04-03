import axios from "axios";

export default {
  // Gets all books
  savedArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("https://react-newyorktimes-scraper.herokuapp.com/" + "/api/article/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("https://react-newyorktimes-scraper.herokuapp.com/" + "/api/article/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("https://react-newyorktimes-scraper.herokuapp.com/" + "/api/articles", articleData);
  }
};

