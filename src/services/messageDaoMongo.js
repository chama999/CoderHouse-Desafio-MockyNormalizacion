import ContenedorMongoDb from "../server/db.js"
import messageModel from "../models/messageSchema.js"

const messageSchema = messageModel.messageSchemaMongoose

class MessagesDaoMongo extends ContenedorMongoDb {

    constructor() {
        super('messages', messageSchema)
    }
}

export default MessagesDaoMongo