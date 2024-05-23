//esta función es para redirigir a la página principal luego de 3 segundos de mostrar el loader

setTimeout(function() {
    //Acá especifico la url o nombre del archivo al que quiero redirigir la página
    window.location.href = "../html/principal.html";
}, 5000); //3 segundos en milisegundos
