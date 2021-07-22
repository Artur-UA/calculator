$('.glass_calc').on('change input', calcTot);


$('#material select').change(function () {
    cxxc = $('#material option:selected').attr('class');
    $('#thickness option').removeAttr('selected');
    $('#thickness select').hide();
    $('#thickness').find('.' + cxxc).css('display', 'block');
    cxxc = '.' + cxxc + ' option:selected';
});

/* $('.form_izdelia').click(function () {
    $('.form_izdelia').addClass('active_figure');
}); */

const figura = document.querySelector('.form_izdelia');
figura.addEventListener('click', function (e) {
    console.log('gggg');
})

function calcTot() {

    let result = document.querySelector('.all_price');
    let massa = document.querySelector('.vv');
    let material = document.querySelector('.select_sel:not([style*="display: none;"])').value;
    let treatment = document.querySelector('.treatment').value;

    let thickness = document.querySelector('.select_sel:not([style*="display: none;"])').options[document.querySelector('.select_sel:not([style*="display: none;"]').selectedIndex].text;
    let thickness_mm = thickness.replace(/[^+\d]/g, '')


    let sum;
    let width = parseFloat($("#width_par").val());
    let height = parseFloat($("#height_par").val());
    let area = width * height / 1000000;
    let facet_m = (width + height) * 2 / 1000;
    let ves = (width * height) / 10000 * 2.5 * thickness_mm / 100;
    massa.textContent = ves;



    console.log(width);
    console.log(height);
    console.log(`Площадь ${area} м2`);
    console.log(`Площадь ${facet_m} м.пог`);
    console.log(material);
    console.log(treatment);
    console.log(thickness);
    console.log(thickness_mm);

    let treatment_price = 0;

    /*     if (treatment == "1") {

            switch (thickness_mm) {
                case "4":
                    treatment_price = 100;
                    break;
                case "5":
                    treatment_price = 112;
                    break;
                case "6":
                    treatment_price = 125;
                    break;
                case "8":
                    treatment_price = 150;
                    break;
                case "10":
                    treatment_price = 163;
                    break;
                case "12":
                    treatment_price = 338;
                    break;
                case "15":
                    treatment_price = 432;
                    break;
                case "19":
                    treatment_price = 557;
                    break;
            }
        }
        if (treatment == "2") {

            switch (thickness_mm) {
                case "4":
                    treatment_price = 57;
                    break;
                case "5":
                    treatment_price = 63;
                    break;
                case "6":
                    treatment_price = 75;
                    break;
                case "8":
                    treatment_price = 100;
                    break;
                case "10":
                    treatment_price = 119;
                    break;
                case "12":
                    treatment_price = 232;
                    break;
                case "15":
                    treatment_price = 257;
                    break;
                case "19":
                    treatment_price = 394;
                    break;
            }
        } 
        console.log(treatment_price);*/

    /*     ОБРАБОТКА  */

    let obrabotka_price = 0;
    let obrabotka = document.querySelector('.treatment').value;

    if (obrabotka == 1) {
        switch (thickness_mm) {
            case "4":
                obrabotka_price = 100 * facet_m;
                break;
            case "5":
                obrabotka_price = 112 * facet_m;
                break;
            case "6":
                obrabotka_price = 125 * facet_m;
                break;
            case "8":
                obrabotka_price = 150 * facet_m;
                break;
            case "10":
                obrabotka_price = 163 * facet_m;
                break;
            case "12":
                obrabotka_price = 338 * facet_m;
                break;
            case "15":
                obrabotka_price = 432 * facet_m;
                break;
            case "19":
                obrabotka_price = 557 * facet_m;
                break;
        }
    }

    if (obrabotka == 2) {
        switch (thickness_mm) {
            case "4":
                obrabotka_price = 57 * facet_m;
                break;
            case "5":
                obrabotka_price = 63 * facet_m;
                break;
            case "6":
                obrabotka_price = 75 * facet_m;
                break;
            case "8":
                obrabotka_price = 100 * facet_m;
                break;
            case "10":
                obrabotka_price = 119 * facet_m;
                break;
            case "12":
                obrabotka_price = 232 * facet_m;
                break;
            case "15":
                obrabotka_price = 257 * facet_m;
                break;
            case "19":
                obrabotka_price = 394 * facet_m;
                break;
        }
    }

    console.log(`Стоимость обработки ${obrabotka_price}`);

    /*     НЕ ЗАКОНЧЕНО ДЛЯ ФИГУРЫ */

    /*     ОБРАБОТКА КОНЕЦ */




    /*     фацет */
    let facet_value = document.querySelector('.sell1').value;
    console.log(facet_value);

    let facet_price = facet_value * facet_m;
    console.log(`Стоимость фацета ${facet_price}`);


    /*     НЕ ЗАКОНЧЕНО ДЛЯ ФИГУРЫ */


    /*     фацет конец*/
    /*     отверстия */

    let otverst_mm = document.querySelector('#otverst').value;
    let otverst_amount = document.querySelector('.prs').value;
    console.log(`диаметр отверстия ${otverst_mm}`);
    console.log(`количество отверстий ${otverst_amount}`);

    let otverst_price = 0;
    if (thickness_mm >= 4 && thickness_mm <= 6) {
        console.log("диаметр 1");
        if (otverst_mm >= 3 && otverst_mm <= 12) {
            otverst_price = 88;
        }
        if (otverst_mm >= 13 && otverst_mm <= 30) {
            otverst_price = 100;
        }
        if (otverst_mm >= 31 && otverst_mm <= 70) {
            otverst_price = 138;
        }
        if (otverst_mm >= 71 && otverst_mm <= 90) {
            otverst_price = 625;
        }
    }
    if (thickness_mm >= 8 && thickness_mm <= 13) {
        console.log("диаметр 2");
        if (otverst_mm >= 3 && otverst_mm <= 12) {
            otverst_price = 100;
        }
        if (otverst_mm >= 13 && otverst_mm <= 30) {
            otverst_price = 119;
        }
        if (otverst_mm >= 31 && otverst_mm <= 70) {
            otverst_price = 163;
        }
        if (otverst_mm >= 71 && otverst_mm <= 90) {
            otverst_price = 625;
        }
    }
    if (thickness_mm >= 15 && thickness_mm <= 19) {
        console.log("диаметр 3");
        if (otverst_mm >= 3 && otverst_mm <= 12) {
            otverst_price = 119;
        }
        if (otverst_mm >= 13 && otverst_mm <= 30) {
            otverst_price = 138;
        }
        if (otverst_mm >= 31 && otverst_mm <= 70) {
            otverst_price = 200;
        }
        if (otverst_mm >= 71 && otverst_mm <= 90) {
            otverst_price = 625;
        }
    }

    console.log(`Стоимость отверстия ${otverst_price}`);
    otverst_price = otverst_price * otverst_amount;
    console.log(`Стоимость за все отверстия ${otverst_price}`);

    /*     отверстия конец*/

    /*     вырезы */
    let vyrez = document.querySelector('.vnu').value;
    let cena_vyreza = 0;
    switch (thickness_mm) {
        case "4":
            cena_vyreza = 438 * vyrez;
            break;
        case "5":
            cena_vyreza = 563 * vyrez;
            break;
        case "6":
            cena_vyreza = 563 * vyrez;
            break;
        case "8":
            cena_vyreza = 625 * vyrez;
            break;
        case "10":
            cena_vyreza = 688 * vyrez;
            break;
        case "12":
            cena_vyreza = 963 * vyrez;
            break;
        case "15":
            cena_vyreza = 1250 * vyrez;
            break;
        case "19":
            cena_vyreza = 1875 * vyrez;
            break;
    }
    console.log(vyrez);
    console.log(`Цена за все вырезы ${cena_vyreza}`);
    /*     вырезы конец*/

    /*     закалка */
    $('#material select').on('change', function () {
        var s = $(this).find('option:selected').text() == "Стекло";
        if (s) {
            console.log("ffff")
            $('.zakalka input').removeAttr('disabled');
            $('.zakalka .g_tit').css('color', 'black');
            $('.zakalka').removeClass('dis');
        } else {
            console.log("zzzz")
            $('.zakalka input').removeAttr('checked')
            $('.zakalka input').attr('disabled', 'disabled');
            $('.zakalka .g_tit').css('color', 'gray');
            $('.zakalka').addClass('dis');
        }
    });

    let zakalka = 0;
    let zaka = $('#check222').is(':checked')
    if (zaka) {
        switch (thickness_mm) {
            case "4":
                console.log("zakalka")
                zakalka = 713 * area;
                break;
            case "5":
                zakalka = 713 * area;
                break;
            case "6":
                zakalka = 825 * area;
                break;
            case "8":
                zakalka = 925 * area;
                break;
            case "10":
                zakalka = 1038 * area;
                break;
            case "12":
                zakalka = 1513 * area;
                break;
            case "15":
                zakalka = 2963 * area;
                break;
            case "19":
                zakalka = 3125 * area;
                break;
        }
    }

    console.log(`Закалка ${zakalka} руб`)

    /*     закалка конец*/
    /*     расстояние */
    $('.deliv_type').on('change', function () {
        var t = $('.deliv_type select option:selected').val();
        if (t == 3) {
            $('.deliverys2').css('opacity', 1);
        } else {
            $('.deliverys2').css('opacity', 0);
            $('.deliverys2 input').val(0);
        }
    });

    let distance = document.querySelector('.distance').value;
    let distance_mkad = document.querySelector('.in5 input').value;
    let distance_price = +0;
    switch (distance) {
        case "1":
            distance_price = 2500;
            break;
        case "2":
            distance_price = 3000;
            break;
        case "3":
            distance_price = 2500 + Number(distance_mkad * 35);
            break;
        case "8":
            distance_price = 0;
            break;
    }
    console.log(distance);
    console.log(distance_mkad);
    console.log(distance_price);
    /*     расстояние конец */



    let sum1 = area * material + distance_price + cena_vyreza + zakalka + otverst_price;
    result.textContent = sum1;
    console.log(`Итоговая стоимость ${sum1} рублей`);

    /*  if (!sum) {
         result.textContent = "Нехватает данных";
         return;
     } */
}
/* calcTot() */