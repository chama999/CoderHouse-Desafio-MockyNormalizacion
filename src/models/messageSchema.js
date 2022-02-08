//schema message json mongoose
import mongoose from 'mongoose';
const SchemaMongoose = mongoose.Schema;

const messageSchemaMongoose = new SchemaMongoose({
    author: {
        email: {type: String,required: true},
        name: {type: String, required: true},
        lastname: {type: String, required: true},
        age: {type: Number, required: true},
        nickname: {type: String, required: true},
        avatar: {type: String, required: true}
    },
    message: {
            type: String,
            required: true
        },
    date: {
            type: Date,
            default: Date.now
        }
});

//schemas author y message normalizr
import normalizr from 'normalizr';
const { schema } = normalizr;
const authorSchemaNormalizr = new schema.Entity('authors', {
    email: {type: String,required: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true},
    nickname: {type: String, required: true},
    avatar: {type: String, required: true}
}, {idAttribute: 'email'});
const messageSchemaNormalizr = new schema.Entity('message', {
    message: {type: String,required: true},
    date: {type: Date, default: Date.now}
}, {idAttribute: 'message'});
const authorMessagesSchemaNormalizr = new schema.Entity('authorMessages', {
    author: authorSchemaNormalizr,
    message: [messageSchemaNormalizr]} , {idAttribute: 'author'});

export {
    messageSchemaMongoose,
    messageSchemaNormalizr,
    authorMessagesSchemaNormalizr,
    authorSchemaNormalizr
}

