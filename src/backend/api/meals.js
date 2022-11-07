 const express = require("express");
 const router = express.Router();
 const knex = require("../database");


router.get("/", async (request, response) => {
    //maxPrice
    if("maxPrice" in request.query){
      const maxPrice = Number(request.query.maxPrice);
      if(isNaN(maxPrice)){
        response.send('maxPrice should be a number!')
      }else{
         meals = knex("meal").where("price", "<", maxPrice);
      }
    }
     //availableReservations
    if("availableReservations" in request.query){
      const reqAvailReservation = request.query.availableReservations;
      if(reqAvailReservation !== 'true'){
        response.send('enter true value of availableReservations!')
      }else {
        meals = knex.raw(`select meal.id , meal.title, (meal.max_reservations)-(reservation.number_of_guests) AS AvailableReservation from meal inner join reservation on meal.id = reservation.meal_id where ((max_reservations)-(number_of_guests)) > 0`)
      }
    }
     //title
    if("title" in request.query) {
      const reqTitle = request.query.title;
      if(!isNaN(reqTitle)){
        response.send("Title should be a string! ")
      }else{
        meals = knex('meal').where("title", "like", `%${reqTitle}%`)
      }
    }
    //dateAfter
    if("dateAfter" in request.query){
      const reqDate = new Date(request.query.dateAfter)
      meals =  knex('meal').where("when_date", ">", reqDate )
    }
    //dateBefore
    if("dateBefore" in request.query){
      const dateReq = new Date(request.query.dateBefore)
      meals =  knex('meal').where("when_date", "<", dateReq  )
    }
    //limit
    if("limit" in request.query){
      const limit = Number(request.query.limit)
      if(isNaN(request.query.limit)){
        response.send('enter a number!')
      }else{
        meals =  knex('meal').limit(limit)
      }
    }
    //api/meals?sort_key=price&sort_dir=desc together
    if("sort_key" in request.query){
      const sortKey = request.query.sort_key;
      const sortDir = request.query.sort_dir;
      const array = ["price", "when_date", "max_reservations"]
      array.forEach( arr =>{
        if (sortKey == arr && sortDir == "desc"){
          meals = knex('meal').orderBy(arr, "desc")
        }else if(sortKey == arr){
          meals = knex('meal').orderBy(arr)
        }
      })
    }
    //api/meals?sort_key=price&sort_dir=desc
    try {
      // knex syntax for selecting things. Look up the documentation for knex for further info
      const findTableData = await knex.select().table('meal')
      if (findTableData.length === 0) {
        response.status(404).json("Table data is not available")
      } else {
        response.json(findTableData);
      }
    } catch (error) {
      response.status(404).json({ error: "Bad Get Request" });
    }
});

// POST /api/meals

router.post("/", async (request, response) => {
 try {
   const [insertedData] = await knex('meal').insert({
     id: request.body.id,
     title: request.body.title,
     description: request.body.description,
     location: request.body.location,
     when_date: request.body.when_date,
     max_reservations: request.body.max_reservations,
     price: request.body.price,
     created_date: request.body.created_date
   });
   const meals = await knex('meal')
   response.status(201).send({ message: "Created meal", id: insertedData, meals: meals })
 } catch (error) {
   throw error;
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

 router.get("/", async (request, response) => {
   try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
     const meals = await knex("meal").select("*");
     if(meals.length === 0){
      response.status(404).send("No meals available !")
     }else{
      response.send(meals);
     }
    } catch (error) {
      throw response.status(404).send(error);
    }
 });
// POST /api/meals

router.post("/", async (request, response) => {
  try {
    const [insertedData] = await knex('meal').insert({
      id: request.body.id,
      title: request.body.title,
      description: request.body.description,
      location: request.body.location,
      when_date: request.body.when_date,
      max_reservations: request.body.max_reservations,
      price: request.body.price,
      created_date: request.body.created_date
    });
    const meals = await knex('meal')
    response.status(201).send({ message: "Created meal", id: insertedData, meals: meals })
  } catch (error) {
    throw error;
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
  const updatedMeal = await knex("meal").where('id', id).update(request.body);
  const meals = await knex("meal").select("*");
  if(updatedMeal !== 0){
   response.send({message: "Updated meal", idUpdated: id, Meals: meals});
  }else{
   response.status(404).send("No meals available to update !")
  }
 } catch (error) {
   throw response.status(404).send(error);
 }

  try {
   // knex syntax for selecting things. Look up the documentation for knex for further info
   const id = request.params.id ;
   const updatedMeal = await knex("meal").where('id', id).update(request.body);
   const meals = await knex("meal").select("*");
   if(updatedMeal !== 0){
    response.send({message: "Updated meal", idUpdated: id, Meals: meals});
   }else{
    response.status(404).send("No meals available to update !")
   }
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
  const meals = await knex("meal").select("*");
  if(deletedMeals !== 0){
   response.send({message: "Deleted meal", deletedMealId : id, meals : meals });
  }else{
   response.status(404).send("No meals available !")
  }
   
 } catch (error) {
   throw response.status(404).send(error);
 }
});


module.exports = router;

  try {
   // knex syntax for selecting things. Look up the documentation for knex for further info
   const id = request.params.id ;
   const deletedMeals = await knex("meal").where('id', id).del();
   const meals = await knex("meal").select("*");
   if(deletedMeals != 0){
    response.send({message: "Deleted meal", deletedMealId : id, meals : meals });
   }else{
    response.status(404).send("No meals available !")
   }
    
  } catch (error) {
    throw response.status(404).send(error);
  }
});
 module.exports = router;

