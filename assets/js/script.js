$(document).ready(function () {
    // Efecto de desplazamiento suave al hacer clic en los enlaces del navbar
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Tooltip para utilizar en los campos de relleno del formulario de contacto
    $('[data-toggle="tooltip"]').tooltip();
});