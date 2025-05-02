function leer() {
    var nom = document.forms["formulario"].elements[0].value; //referencia por pseudoclase
    var pass = document.getElementById("pass").value; // referencia por ID
    var car = document.getElementsByTagName("select")[0].value; //por tagname
    var gen = document.getElementsByName("genero"); //por nombre
    var p = document.getElementById("priv").checked; // referencia por ID
    var g = "No seleccionado"; // Valor por defecto si no se selecciona género

    for (let i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
            g = gen[i].value;
        }
    }

    document.getElementById("cont").innerHTML =
    "<p>Nombre: " + nom + "</p>" +
    "<p>Password: " + pass + "</p>" +
    "<p>Carrera: " + car + "</p>" +
    "<p>Género: " + g + "</p>" +
    "<p>Aceptó términos: " + p + "</p>";

}