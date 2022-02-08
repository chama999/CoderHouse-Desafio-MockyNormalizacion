import express from 'express'
import faker from 'faker'

const { Router } = express
const productsTestRouter = new Router()

function fakerProducts () {
  let products = []
  for (let i = 0; i < 10; i++) {
    products.push({
      id: faker.datatype.number(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentence(),
      image: faker.image.imageUrl()
    })
  }
  return products
}
productsTestRouter.use(function (req, res, next) {
    console.log('New GET /products-test')
    console.log('Time: ', Date.now())
    next()
})
productsTestRouter.get('/', (req, res) => {
    let products = fakerProducts()
    res.render('main.ejs', {list: products})
})

const productsFaker = { productsTestRouter, fakerProducts }
export default productsFaker


//------------------------------------------------------------------------