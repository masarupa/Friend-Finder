var surveyData = require("../data/survey");


module.exports = function(app) {
 
  app.get("/api/survey", function(req, res) {
    res.json(survey);
  });
  app.post("api/friends", ) function(req, res) {
     res.jason(friends); 

  });