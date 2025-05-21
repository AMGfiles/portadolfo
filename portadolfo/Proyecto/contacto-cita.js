document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("citaForm");
    const confirmacion = document.getElementById("confirmacion");
    const btnPDF = document.getElementById("btnPDF");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        confirmacion.style.display = "block";
        confirmacion.scrollIntoView({ behavior: "smooth" });
        console.log("Formulario enviado. Se muestra confirmación.");
    });

    btnPDF.addEventListener("click", function () {
        alert("Generando PDF...");
    

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;
        const motivo = document.getElementById("motivo").value;
        const comentarios = document.getElementById("comentarios").value;

        console.log("Datos capturados:", { nombre, email, telefono, fecha, hora, motivo, comentarios });

        try {
            const doc = new jsPDF();

            doc.setFontSize(18);
            doc.text("Confirmación de Cita - WatchMakers", 20, 20);

            doc.setFontSize(12);
            doc.text(`Nombre: ${nombre}`, 20, 40);
            doc.text(`Correo: ${email}`, 20, 50);
            doc.text(`Teléfono: ${telefono}`, 20, 60);
            doc.text(`Fecha: ${fecha}`, 20, 70);
            doc.text(`Hora: ${hora}`, 20, 80);
            doc.text(`Motivo: ${motivo}`, 20, 90);
            doc.text("Comentarios:", 20, 100);
            // Para acomodar textos largos, usamos splitTextToSize:
            let comentariosFormateados = doc.splitTextToSize(comentarios, 170);
            doc.text(comentariosFormateados, 20, 110);

            doc.setFontSize(10);
            doc.text("Gracias por agendar con nosotros. Presente este comprobante al llegar a tienda.", 20, 270);

            console.log("Generando descarga del PDF...");
            doc.save(`cita_watchmakers_${nombre.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error("Error al generar PDF:", error);
        }
    });
});
