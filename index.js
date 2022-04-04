const express = require("express");
const { homedir } = require("os");
const { resolve } = require("path");
const app = express();

app.use(express.json());   //adding a piece of middleware to the request process in the pipeline

const port = process.env.PORT || 5050;

const posts = [
    {id: 1, name: "Post1"},
    {id: 2, name: "Post2"},
    {id: 3, name: "Post3"},
    {id: 4, name: "Post4"},
];

app.get ("/home", (req, res) => res.send(posts));                    //1st route responding to the http request to home

app.get ("/home/post/:id", (req, res) => {                          //2nd route responding to the http request for posts and single post
    const post = posts.find(c => c.id === parseInt(req.params.id));
    if (!post) res.status (404).send ("The post with the given ID was not found!")
    res.send(post);
});

app.post ("/home", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        name: req.body.name
    };
    posts.push(newPost);
    res.send(posts);
});


app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
