express = require("express");
const router = express.Router();
const Bloodbank = require("../models/Bloodbank");

router.get("/fetchall", async (req, res) => {
  try {
    const bloodbanks = await Bloodbank.find();
    res.json(bloodbanks);
  } catch (err) {
    res.status(500).send("Internal Server Error");
    console.log(err.message);
  }
});

router.post("/fetchbypincode", async (req, res) => {
  try {
    let {pincode} = req.body;
    const bloodbanks = await Bloodbank.find({ "attributes.pincode": pincode });
    res.json(bloodbanks);
  } catch (err) {
    res.status(500).send("Internal Server Error");
    console.log(err.message);
  }
});
router.post("/fetchbystate", async (req, res) => {
  try {
    let {state} = req.body;
    const bloodbanks = await Bloodbank.find({ "attributes.state": state });
    res.json(bloodbanks);
  } catch (err) {
    res.status(500).send("Internal Server Error");
    console.log(err.message);
  }
});
router.post("/fetchbydistrict", async (req, res) => {
    try {
      let {district} = req.body;
      const bloodbanks = await Bloodbank.find({ "attributes.district": district });
      res.json(bloodbanks);
    } catch (err) {
      res.status(500).send("Internal Server Error");
      console.log(err.message);
    }
  });

module.exports = router;
