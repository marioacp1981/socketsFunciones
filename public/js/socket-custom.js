var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar .on
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');

});
// Enviar información .emit
socket.emit('enviarMensaje', {
    usuario: 'Mario',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});