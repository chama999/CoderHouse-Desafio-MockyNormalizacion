//schema message json mongoose
import mongoose from 'mongoose';
const SchemaMongoose = mongoose.Schema;
const userSchemaMongoose = new SchemaMongoose({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    nickname: { type: String, required: true },
    avatar: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true }
});

const messageSchemaMongoose = new SchemaMongoose({
    user: { type: Object, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

//schemas author y message normalizr
import normalizr from 'normalizr';
const { schema } = normalizr;
const userSchemaNormalizr = new schema.Entity('users', {}, { idAttribute: 'email' });
const messageSchemaNormalizr = new schema.Entity('messages', {user: userSchemaNormalizr})




export {
    userSchemaMongoose,
    messageSchemaMongoose,
    messageSchemaNormalizr,
    userSchemaNormalizr
}

