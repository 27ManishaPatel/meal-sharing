 const express = require("express");
 const router = express.Router();
 const knex = require("../database");

 router.get("/", async (request, response) => {
   try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
     const meals = await knex("meal").select("*");
     if(meals.length === 0){
      response.status(404).send("No meals available !")
     }
      response.json(meals);
    } catch (error) {
      throw response.status(404).send(error);
    }
 });
// POST /api/meals

router.put("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const insertedData = await knex('meal').insert({
      title: 'Pav-bhaji',
      description: 'Bread bun with vegetable curry',
      location: 'Soborg',
      when: '2022-09-03',
      max_reservations: 8,
      price: 180,
      created_date: '2022-09-03'
    });
    res.json(insertedData)
  } catch (error) {
    throw response.status(404).json(error);
  }
});

//GET /api/meals/:id
 router.get("/:id", async (request, response) => {
  try {
   // knex syntax for selecting things. Look up the documentation for knex for further info
   const id = request.params.id ;
   const meals = await knex("meal").select("*").where('id', id);
   if(meals.length === 0){
    response.status(404).send("No meals available !")
   }
    response.json(meals);
  } catch (error) {
    throw response.status(404).send(error);
  }
});

//PUT /api/meals/:id

router.put("/:id", async (request, response) => {
  try {
   // knex syntax for selecting things. Look up the documentation for knex for further info
   const id = request.params.id ;
   const meals = await knex("meal").select("*");
   const updatedMeals = await knex("meal").where('id', id).update("price", "300.00");
   if(meals.length === 0){
    response.status(404).send("No meals available to update !")
   }
    response.json(updatedMeals);
  } catch (error) {
    throw response.status(404).send(error);
  }
});
//DELETE /api/meals/:id

router.delete("/:id", async (request, response) => {
  try {
   // knex syntax for selecting things. Look up the documentation for knex for further info
   const id = request.params.id ;
   const deletedMeals = await knex("meal").where('id', id).del();
   if(!deletedMeals){
    response.status(404).send("No meals available !")
   }
    response.json(deletedMeals);
  } catch (error) {
    throw response.status(404).send(error);
  }
});
 module.exports = router;
