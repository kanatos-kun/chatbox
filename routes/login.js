const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Vous etes dans la page login !" });
});

module.exports = router;
