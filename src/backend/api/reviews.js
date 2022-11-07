const { response } = require('express');
const express = require('express');
const { request } = require('../app');
const router = express.Router();
const knex = require('../database');

router.get('/', async (request, response) => {
    try {
        const allReviews = await knex('review').select('*')
          response.send(allReviews);
        } catch (error) {
          throw response.status(404).send(error);
        }
})

//	POST

router.post("/", async (request, response) => {
    try {
      const [insertedReviews] = await knex('review').insert({
        title: request.body.title,
        description: request.body.description,
        meal_id: request.body.meal_id,
        stars: request.body.stars,
      });
      response.send({message: "New review", insertedId : insertedReviews})
      
    } catch (error) {
       response.status(500).send(error);
    }
  });

//GET /api/reviews/:id
router.get("/:id", async (request, response) => {
    try {
     // knex syntax for selecting things. Look up the documentation for knex for further info
     const id = request.params.id ;
     const reviews = await knex("review").select("*").where('id', id);
     if(reviews.length === 0){
      response.status(404).send({ error: "Review not found" })
     }
      response.send({reviews});
    } catch (error) {
      throw response.status(404).send(error);
    }
  });
//PUT /api/reviews/:id
  router.put("/:id", async (request, response) => {
    try {
     // knex syntax for selecting things. Look up the documentation for knex for further info
     const id = request.params.id ;
     const updatedReviews = await knex("review").where('id', id).update(request.body);
     if(updatedReviews !== 0){
      response.status(201).send({message: "updated review", updatedId: id })
     }else {
      response.status(404).send({error : "No reviews available to update !"})
     }
      ;
    } catch (error) {
      throw response.status(404).send(error);
    }
  });
//DELETE /api/reviews/:id
router.delete("/:id", async (request, response) => {
    try {
     // knex syntax for selecting things. Look up the documentation for knex for further info
     const id = request.params.id ;
     const deletedReviews = await knex("review").where('id', id).del();
     const reviews = await knex("review").select("*");
     if( deletedReviews !== 0){
      response.send({message: "Deleted review", deletedId : id, Reviews :  reviews  });
     }else{
      response.status(404).send("No  reviews available !")
     }
    } catch (error) {
      throw response.status(404).send(error);
    }
  });

module.exports = router;