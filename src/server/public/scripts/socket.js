const socket = io("localhost:3000");
const { schema } = normalizr;

//schema message
const userSchemaNormalizr = new schema.Entity('users', {}, { idAttribute: 'email' });
const messageSchemaNormalizr = new schema.Entity('messages', {user: userSchemaNormalizr})

// Escuchando el evento 'message' del servidor
socket.on("message", data => {
    console.log("Socket script -- Normalizado: ", JSON.stringify(data));

    
    // denormalizar data
    let denormalizedData = normalizr.denormalize(data.result, [messageSchemaNormalizr], data.entities);
    //console.log("Socket script -- Denormalizada: ", JSON.stringify(denormalizedData).length);
    console.log(denormalizedData)
    let compresion = Math.trunc((JSON.stringify(denormalizedData).length/JSON.stringify(data).length) * 100);
    $("#compresiondiv").html(`<p><b>Compresión de mensajes:</b> <b>${compresion} %</b></p>`)
    for (let i = 0; i < denormalizedData.length; i++) {
    data= `<br/> <span style="color:blue;font-weight:bold"> ${denormalizedData[i].user.nickname} </span>
     - <span style="color:darkolivegreen;font-weight:bold"> ${denormalizedData[i].date} </span> - 
     <span style="color:black;font-weight:bold"> ${denormalizedData[i].message}</span>`;
    $("#chat").append(data)
    }
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
        user: { email: email, name: name, lastname: lastname, avatar: avatar, age: Number(age), nickname: nickname },
        message: $("#msn")[0].value,
    }
    console.log("Enviando mensaje al servidor: ", JSON.stringify(msn));
    socket.emit("message", msn);
    $("#msn")[0].value = "";
}

