//connect to mongo db localhost
import mongoose from 'mongoose'
import { asPOJO, renameField, removeField, print } from './utils.js'
import config from '../config/config.js';
import { messageSchemaMongoose } from '../models/messageSchema.js'

const connectedDB = mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)
.then(
    () => {
        console.log('connected to mongodb')
    },
    err => {
        console.log('error connecting to mongodb', err)
    }
)

class ContenedorMongoDb {

    constructor(nombreColeccion, data) {
        this.data = data
        this.coleccion = mongoose.model(nombreColeccion,messageSchemaMongoose)
    }

    async listById(id) {
        try {
            print(id)
            const docs = await this.coleccion.find({ '_id': id }, { __v: 0 })
            print(docs)
            if (docs.length == 0) {
                throw new Error('Error al listar por id: no encontrado')
            } else {
                const result = renameField(asPOJO(docs[0]), '_id', 'id')
                return result
            }
        } catch (error) {
            throw new Error(`Error al listar por id: ${error}`)
        }
    }

    async listAll() {
        try {
            console.log(`----------Listing all documents from ${this.coleccion.modelName}-----`)
            //obtener todos los documentos de la coleccion en mongo
            let docs = await this.coleccion.find({}, { __v: 0 }).lean()
            //convertir los documentos a objetos
            docs = docs.map(asPOJO)
            docs = docs.map(d => renameField(d, '_id', 'id'))
            return docs
        } catch (error) {
            throw new Error(`Error al listar todo: ${error}`)
        }
    }

    async save(nuevoElem) {
        try {
            console.log("Trying save" + JSON.stringify(nuevoElem))
            let now = { date: new Date().toLocaleTimeString()};
            nuevoElem = { ...nuevoElem, now }  
            console.log("Trying save added date" + JSON.stringify(nuevoElem))

            let doc = await this.coleccion.create(nuevoElem);
            doc = asPOJO(doc)
            renameField(doc, '_id', 'id')
            removeField(doc, '__v')
            return doc
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

    async update(nuevoElem) {
        try {
            renameField(nuevoElem, 'id', '_id')
            const { n, nModified } = await this.coleccion.replaceOne({ '_id': nuevoElem._id }, nuevoElem)
            if (n == 0 || nModified == 0) {
                throw new Error('Error al actualizar: no encontrado')
            } else {
                renameField(nuevoElem, '_id', 'id')
                removeField(nuevoElem, '__v')
                return asPOJO(nuevoElem)
            }
        } catch (error) {
            throw new Error(`Error al actualizar: ${error}`)
        }
    }

    async deleteById(id) {
        try {
            const { n, nDeleted } = await this.coleccion.deleteOne({ '_id': id })
            if (n == 0 || nDeleted == 0) {
                throw new Error('Error al borrar: no encontrado')
            }
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }

    async deleteAll() {
        try {
            await this.coleccion.deleteMany({})
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }
}

export default ContenedorMongoDb