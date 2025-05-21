document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos
    const miniaturas = document.querySelectorAll('.miniatura');
    const imagenPrincipal = document.getElementById('imagen-principal');
    
    // Agregar evento click a cada miniatura
    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', function() {
            // Remover clase activa de todas las miniaturas
            miniaturas.forEach(m => m.classList.remove('activa'));
            
            // Agregar clase activa a la miniatura clickeada
            this.classList.add('activa');
            
            // Cambiar la imagen principal
            const imagenMiniatura = this.querySelector('img');
            imagenPrincipal.src = imagenMiniatura.src;
            imagenPrincipal.alt = imagenMiniatura.alt;
        });
    });
    
    // Evento para el enlace "No sé mi código postal"
    const noSeCodigo = document.querySelector('.no-se-codigo');
    if(noSeCodigo) {
        noSeCodigo.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Puedes encontrar tu código postal en: https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/CodigoPostal_Exportar.aspx');
        });
    }
});