const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [
  {
    title: "The post title",
    contents: "The post contents"
  }
];

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

// TODO: your code to handle requests

server.get("/posts", (req, res) => {
  const { term } = req.query;
  if (term) {
    const newPosts = posts.filter(post => {
      const tempTitle = post.title.split(" ");
      const tempContents = post.contents.split(" ");
      console.log(tempContents);
      if (tempTitle.includes(term) || tempContents.includes(term)) {
        return post;
      }
    });
    if (newPosts.length) {
      res.send(newPosts);
    } else {
      res.send("No posts match");
    }
  }
  res.send(posts);
});

// server.get("/post/:term?", (req, res) => {});

module.exports = { posts, server };
