// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
	db.Post.findAll({})
	.then( (data) => {
	res.json(data);
	})
	.catch( (err) => {
	if (err) throw err;

  });
})

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
	var categoryTag=req.params.category;
	db.findAll(where: {category: categoryTag}).then( (data) => {
	res.json(data)
  }).catch( (err) => {
	if err throw err;
 })

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json

	db.findOne({
    where:{id: req.params.id
  }
  }).done( {data} =>{
    res.json(data);
  }).catch( (error) => {
    if (error) throw error;
  })
})


  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.Post.destroy({
      where: { id: req.params.id }
    }).done( (data) => {
      res.json(data)
    }).catch( (err) =>{
      if (err) throw err;
    })
 
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Post.update(
      {
        title: req.body.title,
        body: req.body.body,
        category: req.body.category
      }
    )
  });
};