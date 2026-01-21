$(document).ready(function () {
    $('#cargarPaises').on('click', function () {
        $.getJSON('https://restcountries.com/v2/region/europe', function (data) {
            $.each(data, function (i, pais) {
                $('#listaPaises').append('<li>' + pais.name + '</li>');
            });
        }).fail(function (obj) {
            $('#error').html('Error ' + obj.status + ' - ' + obj.statusText);
        });
    });
    $('#noCargar').on('click', function () {
        $('#listaPaises').empty()
    });
});