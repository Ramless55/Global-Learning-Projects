const express = require('express')
const fruitsController = require('../controllers/fruitsControllers')

const router = (Fruit) => {
  const fruitsRouter = express.Router()

    const { getAllFruits, getFruitById, postFruit, deleteById, putFruitById } = fruitsController(Fruit);

    fruitsRouter.route('/fruits').get(getAllFruits).post(postFruit);

    fruitsRouter.route('/fruits/:id').get(getFruitById).delete(deleteById).put(putFruitById);

  return fruitsRouter
}

module.exports = router