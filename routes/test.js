const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "vous etes dans la page about!" });
});

router.post("/", (req, res) => {
  res.json(req.get("Authorization"));
});

module.exports = router;
