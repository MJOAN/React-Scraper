import axios from "axios";

export default {
    // Gets all articles saved from database
    savedArticles: function() {
        return axios.get("https://lit-hollows-89451.herokuapp.com/" + "/api/articles");
    },
    // Gets the articles with the given id
    saveArticle: function(id) {
        return axios.post("https://lit-hollows-89451.herokuapp.com/" + "/api/articles/" + id);
    },
    // Deletes the articles with the given id from database
    deleteArticle: function(id) {
        return axios.delete("https://lit-hollows-89451.herokuapp.com/" + "/api/articles/" + id);
    }
};