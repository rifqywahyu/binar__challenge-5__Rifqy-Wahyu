const express = require('express')
const app = express()
const port = 2000
const { Car } = require('./models')

app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.get("/api/v1/cars", (req, res) => {
  Car.findAll({
    where: { deletedAt:null }
  }).then(cars => {
    res.status(200).json(cars)
  })
})

app.get("/api/v1/car/:id", (req, res) => {
  Car.findByPk(req.params.id).then(car => {
    res.status(200).json(car)
    })
})

app.post("/api/v1/car", (req, res) => {
  Car.create({  
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    dateCreated: new Date(),
    dateUpdated: new Date(),
    imgURL: req.body.imgURL,
  }).then(car => {
    res.status(201).json(car)
  }).catch(err => {
    res.status(422).json("Can't create car")
  })
})

app.put("/api/v1/car/:id", (req, res) => {
  Car.findByPk(req.params.id).then(car => {
    if (car === null) {
      throw "Car not found!"
    }
    Car.update({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        imgURL: req.body.imgURL,
    }, {
      where: { id:req.params.id }
    })
      .then(car => {
        res.status(201).json(car)
      })
      .catch(err => {
        res.status(422).json("Can't update car")
      })
  })
    .catch(err => {
      res.status(404).send(err)
  })
})

app.delete("/api/v1/car/:id", (req, res) => {
  Car.findByPk(req.params.id).then(car => {
    if (car === null) {
      throw "Car not found!"
    }
    Car.update({
      deletedAt: new Date(),
      deletedBy: req.body.deletedBy,
      ...car
    }, {
      where: { id:req.params.id }
    })
      .then(car => {
        res.status(201).json(car)
      })
      .catch(err => {
        res.status(422).json("Can't delete car")
      })
  })
    .catch(err => {
      res.status(404).send(err)
  })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})