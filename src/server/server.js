import express from 'express';
import productsRouter from '../api/products.js';
import productsFaker from '../api/products-test.js';
import mainRouter from '../api/main.js';
import path from 'path';
import {fileURLToPath} from 'url';

//------------------------------------------------------------------------
// instancio servidor

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.debug('directory-name:', __dirname);
const pathViews = path.join(__dirname, '../views')
const publcPath = path.join(__dirname, '../server/public')
console.log('publicPath:', publcPath);
//--------------------------------------------
// configuro el servidor
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(publcPath))
app.use('../public/images', express.static('uploads'))
app.use('/api/products', productsRouter)
app.use('/api/products-test', productsFaker.productsTestRouter)
app.use('/', mainRouter)

//configuración de views
app.set('views', pathViews)
app.set('view engine', 'ejs')

//contabilizador de visitas
app.use(function(req, res, next) {
    console.log("Time: ", Date.now())
    next()
    })

export default app
