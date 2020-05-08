const express = require("express")

const router = express.Router()

router.get("/api/list", (req, res) => {
  res.send([
    {
      name: 'keith1',
      age: 25
    },
    {
      name: 'keith2',
      age: 26
    }
  ])
})

module.exports = router