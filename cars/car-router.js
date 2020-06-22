const express = require("express");

const db = require("../data/config");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next)=>{
    try{
       const car = await db("cars").where("id", req.params.id)
       res.json(car)

    } catch (err){
        next(err)
    }
})

router.post("/", async (req, res, next)=>{
    try{
        const payload = {
            VIN: req.body.VIN,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmission: req.body.transmission || null,
            title: req.body.title || null 
        }
        await db("cars").insert(payload)
        res.status(201).json({
            message: "Car created successfully"
        })
    } catch(err){
        next(err)
    }
})

module.exports = router