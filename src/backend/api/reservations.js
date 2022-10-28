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
     }else{
      response.send(reservations);
     }
    } catch (error) {
      throw response.status(404).send(error);
    }
 });

 // PUT /api/reservations Adds a new reservation to the database
router.post("/", async (request, response) => {
  try {
    const [insertedReservation] = await knex('reservation').insert({
      id: request.body.id,
      number_of_guests: request.body.number_of_guests,
      meal_id: request.body.meal_id,
      created_date: request.body.created_date,
      contact_phonenumber: request.body.contact_phonenumber,
      contact_name: request.body.contact_name,
      contact_email: request.body.contact_email
    });
    const reservations = await knex("reservation").select("*");
    if(insertedReservation != 0){
      response.send({message: "New reservation", insertedId : insertedReservation, Reservations: reservations})
    }
  } catch (error) {
    throw response.status(404).send(error);
  }
});


//GET /api/reservations/:id

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


//PUT /api/reservations/:id

//PUT /api/meals/:id

router.put("/:id", async (request, response) => {
  try {
   // knex syntax for selecting things. Look up the documentation for knex for further info
   const id = request.params.id ;
   const updatedReservations = await knex("reservation").where('id', id).update(request.body);
   const reservations = await knex("reservation").select("*");
   if(updatedReservations != 0){
    response.status(201).send({message: "updated reservation", updatedId: id, Reservations: reservations })
   }else{
    response.status(404).send("No reservations available to update !")
   }
    ;
  } catch (error) {
    throw response.status(404).send(error);
  }
});


//DELETE /api/reservations/:id

//DELETE /api/meals/:id

router.delete("/:id", async (request, response) => {
  try {
   // knex syntax for selecting things. Look up the documentation for knex for further info
   const id = request.params.id ;
   const deletedReservations = await knex("reservation").where('id', id).del();
   const reservations = await knex("reservation").select("*");
   if(deletedReservations != 0){
    response.send({message: "Deleted reservation", deletedId : id, Reservations : reservations });
   }else{
    response.status(404).send("No reservations available !")
   }
  } catch (error) {
    throw response.status(404).send(error);
  }
});

module.exports = router;