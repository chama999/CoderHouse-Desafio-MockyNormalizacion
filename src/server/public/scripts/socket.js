const socket = io("localhost:3000");
const desnormalize = require('normalizr').denormalize;
/**/
//schema message
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

// Escuchando el evento 'diego'
socket.on("message", data => {
    data = desnormalize(data.result, authorMessagesSchemaNormalizr, data.entities)
    console.log("cliente socket: ", JSON.stringify(data));
    console.log("nickname: ", data.author.nickname);
    data= `<br/> <span style="color:blue;font-weight:bold"> ${data.author.nickname} </span> - <span style="color:darkolivegreen;font-weight:bold"> ${data.date} </span> - <span style="color:black;font-weight:bold"> ${data.message}</span>`;
    console.log(data)
    $("#chat").append(data)
})


$("#btn").click(emitir);

// Emite mensaje al servidor
function emitir() {
    name = $("#name").val();
    lastname = $("#lastname").val();
    avatar = $("#avatar").val();
    age = $("#age").val();
    nickname = $("#nickname").val();
    message = $("#msn")[0].value;
    email = $("#email").val();
    let msn = {
        author: { email: email, name: name, lastname: lastname, avatar: avatar, age: age, nickname: nickname },
        date: new Date().toLocaleDateString("es-ES"),
        message: $("#msn")[0].value,
    }

    socket.emit("message", msn);
    $("#msn")[0].value = "";
}