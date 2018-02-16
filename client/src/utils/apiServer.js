import axios from "axios";

export default {
    // Gets all articles saved from database
    savedArticles: function() {
        return axios.get("/api/articles");
    },
    // Gets the articles with the given id
    saveArticle: function(id) {
        return axios.post("/api/articles/" + id);
    },
    // Deletes the articles with the given id from database
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    }
};