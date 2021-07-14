$('.glass_calc').on('change input', calcTot);


$('#material select').change(function () {
    cxxc = $('#material option:selected').attr('class');
    $('#thickness option').removeAttr('selected');
    $('#thickness select').hide();
    $('#thickness').find('.' + cxxc).css('display', 'block');
    cxxc = '.' + cxxc + ' option:selected';
});

function calcTot() {

    const result = document.querySelector('.all_price');
    const material = document.querySelector('.select_sel:not([style*="display: none;"])').value;
    const treatment = document.querySelector('.treatment').value;

    const thickness = document.querySelector('.select_sel:not([style*="display: none;"])').data-ves;

    let sum;
    let width = parseFloat($("#width_par").val());
    let height = parseFloat($("#height_par").val());
    let area = width * height / 1000000;
    let facet_m = (width + height) * 2 / 1000

    console.log(width);
    console.log(height);
    console.log(`Площадь ${area} м2`);
    console.log(`Площадь ${facet_m} м.пог`);
    console.log(material);
    console.log(treatment);
    console.log(thickness);

/*     let treatment_price
    if (treatment == "0") {

        console.log("0000")
    } */


    if (!sum) {
        result.textContent = "Нехватает данных";
        return;
    }
}
/* calcTot() */