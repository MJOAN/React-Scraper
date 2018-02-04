import axios from "axios";
import cheerio from "cheerio";

const baseURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const apikey = "&api-key=9d4a8986921972b65754ea0809d47c84%3A12%3A74623931";
const topic = "";
const topicURL = baseURL + topic + apikey;

  getArticles: function() {
  
  axios.get(topicURL).then((response) => {
    var $ = cheerio.load(response.data);
    var nytimes = [];

   console.log("data: ", response)
      this.setState({ article: response.data.response.article });
  })
    .catch((err) => {
  console.log("error", err)
  })
});




/*
  $('tr', '.text-right').each( (i, elm) => {
  nytimes.push({
    });
  });
  return(nytimes);
  })
  .then ( (nytimes) => {
  console.log(nytimes);
});*/


