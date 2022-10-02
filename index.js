const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

// const URL = "https://books.rakuten.co.jp/rb/15465167/";
const URL = "https://search.rakuten.co.jp/search/mall/kobo/";
const dataArray = [];
axios(URL).then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);

    const $ = cheerio.load(htmlParser);
    $(".searchresultitem", htmlParser).each(function() {
        const title = $(this).find(".title").text();
        const price = $(this).find(".important").text();
        dataArray.push({ title, price })
        console.log(dataArray);
    });
}).catch((error) => console.log(error));

app.listen(PORT, console.log("Server Running!"));
