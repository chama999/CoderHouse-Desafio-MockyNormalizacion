import express from 'express'
import productsFaker from './products-test.js'
import config from '../config/config.js';

const { Router } = express
const mainRouter = new Router()

//Según el ambiente usamos API o API-TEST.
let products=[]
if (config.env.ENV==='test') {products = productsFaker.fakerProducts()}


//rutas main
mainRouter.get('/', (req, res) => {
    console.debug('NEW GET Main --> ejs/main.ejs')
    res.render('./main', {list: products})
})

mainRouter.get('/list', (req, res) => {
    console.debug('NEW GET /list --> ejs/list.ejs')
    res.render('./list', {list: products})
})

export default mainRouter