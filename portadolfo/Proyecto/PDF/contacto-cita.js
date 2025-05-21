document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("citaForm");
    const confirmacion = document.getElementById("confirmacion");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        confirmacion.style.display = "block";
        confirmacion.scrollIntoView({ behavior: "smooth" });

        const btnPDF = document.getElementById("btnPDF");
        if (btnPDF && !btnPDF.dataset.listenerAttached) {
            btnPDF.addEventListener("click", async function () {
                const { jsPDF } = window.jspdf;

                const nombre = document.getElementById("nombre").value;
                const email = document.getElementById("email").value;
                const telefono = document.getElementById("telefono").value;
                const fecha = document.getElementById("fecha").value;
                const hora = document.getElementById("hora").value;
                const motivo = document.getElementById("motivo").value;
                const comentarios = document.getElementById("comentarios").value;

                try {
                    const doc = new jsPDF();

                    // Logo en base64
    

                    // Encabezado
                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(20);
                    doc.text("WatchMakers", 20, 25);
                    doc.setFontSize(14);
                    doc.text("Comprobante de Cita", 20, 35);
                    doc.setLineWidth(0.5);
                    doc.line(20, 38, 190, 38);

                    // Datos del formulario
                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(12);
                    let y = 50;

                    doc.text(`Nombre: ${nombre}`, 20, y); y += 10;
                    doc.text(`Correo: ${email}`, 20, y); y += 10;
                    doc.text(`Teléfono: ${telefono}`, 20, y); y += 10;
                    doc.text(`Fecha: ${fecha}`, 20, y); y += 10;
                    doc.text(`Hora: ${hora}`, 20, y); y += 10;
                    doc.text(`Motivo: ${motivo}`, 20, y); y += 10;

                    // Comentarios
                    doc.text("Comentarios:", 20, y); y += 8;
                    const comentariosFormateados = doc.splitTextToSize(comentarios || "(sin comentarios)", 170);
                    doc.text(comentariosFormateados, 25, y);
                    y += comentariosFormateados.length * 7;

                    // Pie de página
                    doc.setFontSize(10);
                    doc.setTextColor(100);
                    doc.text("Gracias por agendar con nosotros. Presente este comprobante al llegar a tienda.", 20, 280);

                    // Guardar PDF
                    doc.save(`cita_watchmakers_${nombre.replace(/\s+/g, '_')}.pdf`);
                } catch (error) {
                    console.error("Error al generar PDF:", error);
                    alert("Error al generar PDF. Revisa la consola.");
                }
            });
            btnPDF.dataset.listenerAttached = "true";
        }
    });
});
