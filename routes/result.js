import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  if (req.body.Gender) {
    var gender = req.body.Gender;
  } else {
    res.status(400).send("Please Enter Gender (M/F)");
  }
  if (req.body.HeightCm) {
    var height = req.body.HeightCm / 100;
  } else {
    res.status(400).send("Please Enter your Height (in cm)");
  }
  if (req.body.WeightKg) {
    var weight = req.body.WeightKg;
  } else {
    res.status(400).send("Please Enter your weight (in Kg)");
  }
  const BMI = (weight / (height * height)).toFixed(2) + " kg/m2";
});

export default router;
