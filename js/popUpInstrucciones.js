//Con esta función se muestra el pop-up al cargar la página
window.onload = function() {
    document.getElementById("instruccionesPopUp").classList.add("active");
};

//Con está función al hacer clicl en el botón se cierra el pop-up
document.getElementById("cerrarPopUp").onclick = function() {
    document.getElementById("instruccionesPopUp").classList.remove("active");
};