$(document).ready(function () {

    //Kartice
    var karticeDOM = $('#kartice');
    var kartice = [];

    function karticeToHtml() {
        kartice.forEach(function (kartica, i) {

            var karticaTemplate = '<div class="kartica">'

            //Slike u kartici
            var slike = '<div class="slike">'
            kartica.slike.forEach(function (slika, j) {

                //Prikaz samo prvih 5
                var display = '';
                if (j > 5) {
                    display = 'style="display:none"';
                }

                slike += '<a ' + display + ' href="./Slike/' + slika.velika + '" data-lightbox="galerija-' + i + '"><img src="./Slike/' + slika.mala + '" alt="" /></a>'

            });
            slike += '</div>'

            karticaTemplate += slike;
            karticaTemplate += '</div>';

            karticeDOM.append(karticaTemplate);

            console.log(karticaTemplate);

        });


    }

    function jsonToKartice(karticeArray) {
        // Sortiranje po rednom broju
        karticeArray.sort(function (a, b) {
            return a - b
        });
        kartice = karticeArray;
        karticeToHtml();
    }



    // AJAX
    $.ajax({
        type: 'GET',
        url: './podesavanja/konfiguracija.json',
        dataType: 'json',
        success: function (data) {

            //Kartice
            jsonToKartice(data.kartice);
        }
    });


});