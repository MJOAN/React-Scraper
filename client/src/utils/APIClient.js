import axios from "axios";

const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const apikey = "&api-key=f28ae2254f6244cf88f9de98174f39e9";


const APIClient = { 
  getArticles: function(topic = "") {

  const topicURL = baseURL + topic + apikey;
  return axios.get(topicURL).then((response) => {
  console.log("data: ", response)
  return response;
  
    })
  }
}

export default APIClient;

