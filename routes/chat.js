const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Bienvenue dans la page Chat !" });
});

module.exports = router;
