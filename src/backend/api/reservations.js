const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET /api/reservations
 router.get("/", async (request, response) => {
   try {
     // knex syntax for selecting things. Look up the documentation for knex for further info
     const reservations = await knex("reservation").select("*");
     if(reservations.length === 0){
      response.status(404).send("No reservations available !")
     }
     console.log(reservations  + "no reservations")
      response.send(reservations);
    } catch (error) {
      throw response.status(404).send(error);
    }
 });

 // PUT /api/reservations Adds a new reservation to the database
router.post("/", async (request, response) => {
  try {
    const insertedReservation = await knex('reservation').insert({
      id: 5,
      number_of_guests: 6,
      meal_id: 2,
      created_date: '2022-09-13',
      contact_phonenumber: '91454545',
      contact_name: 'Rudra',
      contact_email: 'rudra@gmail.com'
    });
    response.send(insertedReservation)
  } catch (error) {
    throw request.status(404).send(error);
  }
});

//GET /api/meals/:id
router.get("/:id", async (request, response) => {
  try {
   // knex syntax for selecting things. Look up the documentation for knex for further info
   const id = request.params.id ;
   const reservations = await knex("reservation").select("*").where('id', id);
   if(reservations.length === 0){
    response.status(404).send("No reservations available !")
   }
    response.send(reservations);
  } catch (error) {
    throw response.status(404).send(error);
  }
});

//PUT /api/meals/:id
router.put("/:id", async (request, response) => {
  try {
   // knex syntax for selecting things. Look up the documentation for knex for further info
   const id = request.params.id ;
   const updatedReservations = await knex("reservation").where('id', id).update("number_of_guests", 11);
   const reservations = await knex("reservation").select("*");
   if(reservations.length === 0){
    response.status(404).send("No reservations available to update !")
   }
    response.send(updatedReservations);
  } catch (error) {
    throw response.status(404).send(error);
  }
});

//DELETE /api/meals/:id
router.delete("/:id", async (request, response) => {
  try {
   // knex syntax for selecting things. Look up the documentation for knex for further info
   const id = request.params.id ;
   const deletedReservations = await knex("reservation").where('id', id).del;
   if(!deletedReservations){
    response.status(404).send("No reservations available !")
   }
    response.send(deletedReservations);
  } catch (error) {
    throw response.status(404).send(error);
  }
});
module.exports = router;