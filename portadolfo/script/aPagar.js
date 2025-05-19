function calcular() {
    var hora = document.getElementById("numhora").value;
    var tipo = document.getElementById("tip").value;

    var pag;
    if (tipo == 1) {
        pag = 20.0 * hora;
    }else if (tipo == 2) {
        pag = 30.0 * hora;
    }else {
        pag = 40.0 * hora;
    }

    document.getElementById("aqui").innerHTML = "Total a pagar: $" + pag + ".00";
}