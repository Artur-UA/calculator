$('.glass_calc').on('change input', calcTot);


$('#material select').change(function () {
    cxxc = $('#material option:selected').attr('class');
    $('#thickness option').removeAttr('selected');
    $('#thickness select').hide();
    $('#thickness').find('.' + cxxc).css('display', 'block');
    cxxc = '.' + cxxc + ' option:selected';
});

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


    let sum1 = area * material;
    result.textContent = sum1;


    console.log(width);
    console.log(height);
    console.log(`Площадь ${area} м2`);
    console.log(`Площадь ${facet_m} м.пог`);
    console.log(material);
    console.log(treatment);
    console.log(thickness);
    console.log(thickness_mm);

    let treatment_price = 0;

    if (treatment == "1") {

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


    /* treatment_price = 5;
    console.log("0000"); */


    console.log(treatment_price);


    /*  if (!sum) {
         result.textContent = "Нехватает данных";
         return;
     } */
}
/* calcTot() */