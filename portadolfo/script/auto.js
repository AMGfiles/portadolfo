async function evaluar() {
    const respuestas = {
        q1: "Volkswagen",
        q2: "Ferrari",
        q3: "Japón",
        q4: "Volkswagen",
        q5: "4"
    };

    let correctas = 0;
    let resultadosHTML = "<ol>";
    let resultadosTexto = "Resultados del cuestionario:\n\n";

    for (let i = 1; i <= 5; i++) {
        let respuestaUsuario = document.getElementById(`q${i}`).value.trim().toLowerCase();
        let respuestaCorrecta = respuestas[`q${i}`].toLowerCase();
        let resultado = "";

        if (respuestaUsuario == respuestaCorrecta) {
            resultado = "Correcto";
            correctas++;
        } else {
            resultado = "Incorrecto (Correcta: " + respuestas[`q${i}`] + ")";
        }

        resultadosHTML += `<li>Pregunta ${i}: ${resultado}</li>`;
        resultadosTexto += `Pregunta ${i}: ${resultado}\n`;
    }

    resultadosHTML += "</ol>";
    resultadosHTML += `<strong>Puntaje total: ${correctas} de 5</strong>`;
    resultadosTexto += `\nPuntaje total: ${correctas} de 5`;

    document.getElementById("resultados").innerHTML = resultadosHTML;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Resultados del cuestionario", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    let lines = doc.splitTextToSize(resultadosTexto, 180);
    doc.text(lines, 20, 30);

    const pdfBlob = doc.output("blob");
    const pdfURL = URL.createObjectURL(pdfBlob);
    document.getElementById("visorPDF").src = pdfURL;

    doc.save("resultado_cuestionario.pdf");
}
