const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/meals", mealsRouter);

//after the line where it says router.use("/meals", mealsRouter);. There you can go ahead and define the desired routes like you normally would:

app.get("/my-route", (req, res) => { res.send("Hi friend") });

const knex = require('knex')({
  client: 'mysql2',
  connection: {
      host : '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '12345678',
      database: 'meal_sharing'
  }
})
//Respond with all meals in the future (relative to the when datetime)
app.get('/future-meals', async(req, res) => {
  const dbResult = await knex.raw('SELECT * FROM meal WHERE when_date > NOW()')
  const rows = dbResult[0]
  if (rows.length === 0){
    res.status(404).json({ status : 'No meals available'})
  }else {
    res.json(rows)
  }
});
//Respond with all meals in the past (relative to the when datetime)
app.get('/past-meals', async(req, res) => {
  const dbResult = await knex.raw('SELECT * FROM meal WHERE when_date < NOW()')
  const rows = dbResult[0]
  if (rows.length === 0){
    res.status(404).json({ status : 'No meals available'})
  }else {
    res.json(rows)
  }
})
//Respond with all meals sorted by ID
app.get('/all-meals', async(req, res) => {
  const dbResult = await knex.raw('SELECT * FROM meal ORDER BY id')
  const rows = dbResult[0]
  if (rows.length === 0){
    res.status(404).json({ status : 'No meals available'})
  }else {
    res.json(rows)
  }
})
//Respond with the first meal (meaning with the minimum id)
app.get('/first-meal', async(req, res) => {
  const dbResult = await knex.raw('SELECT * FROM meal ORDER BY id LIMIT 1')
  const rows = dbResult[0]
  if (rows.length === 0){
    res.status(404).json({ status : 'No meals available'})
  }else {
    res.json(rows)
  }
})
//Respond with the last meal (meaning with the maximum id)
app.get('/last-meal', async(req, res) => {
  const dbResult = await knex.raw('SELECT * FROM meal ORDER BY id DESC LIMIT 1')
  const rows = dbResult[0]
  if (rows.length === 0){
    res.status(404).json({ status : 'No meals available'})
  }else {
    res.json(rows)
  }
})

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file"
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

//added this to connecting port
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
module.exports = app;
