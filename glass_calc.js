function isright(obj) {
    var value = +obj.value.replace(/\D/g, '') || 0;
    var min = +obj.getAttribute('min');
    var max = +obj.getAttribute('max');
    obj.value = Math.min(max, Math.max(min, value));
}

$(function() {
    $('.deliv_type select').get(0).selectedIndex = 2;
    $(".frm_bot").s3IncludeForm('/frm2');

    $('.glass_calc input').keypress(function(event) {
        var key, keyChar;
        if (!event)
            var event = window.event;

        if (event.keyCode)
            key = event.keyCode;
        else if (event.which)
            key = event.which;

        if (key == null || key == 0 || key == 8 || key == 13 || key == 37 || key == 39 || key == 46 || key == 9)
            return true;
        keyChar = String.fromCharCode(key);

        if (!/[0-9-\+]/.test(keyChar))
            return false;

    });

    $('#material select').on('change', function() {
        var s = $(this).find('option:selected').text() == "Стекло";
        if (s) {
            $('.zakalka input').removeAttr('disabled');
            $('.zakalka .g_tit').css('color', 'black');
            $('.zakalka').removeClass('dis');
        } else {
            $('.zakalka input').removeAttr('checked')
            $('.zakalka input').attr('disabled', 'disabled');
            $('.zakalka .g_tit').css('color', 'gray');
            $('.zakalka').addClass('dis');
        }
    });

    var $calc = $('.glass_calc')
      , g_diam = $calc.find('.g_diam').eq(0).html()
      , g_diam = '<div class="g_diam g_diam2">' + g_diam + '<div>'
      , btn = $calc.find('.amount_sum');

    $('#edging select').change(function() {
        var facet = $('#edging option:selected').text()
          , fc = "Фацет";

        if (fc == facet) {
            /*$('#w_facet option:selected').each(function(){
					this.selected=true;	
				});
				$('#w_facet select').removeAttr('disabled');
				$("#w_facet select :nth-child(2)").attr("selected", "selected");*/
            $('.sell2').css('display', 'block');
            $('.sell1').css('display', 'none');
            $('#w_facet .g_title').css('color', 'black');
            $('#w_facet').removeClass('dis');
        } else {
            $('.sell1').css('display', 'block');
            $('.sell2').css('display', 'none');
            $('#w_facet .g_title').css('color', 'gray');
            $('#w_facet').addClass('dis');
            /*$('#w_facet option:selected').each(function(){
					this.selected=false;	
				});
				$('#w_facet select').attr('disabled', 'disabled');*/
        }
    });

    function func() {
        $('.w_g_diam .g_diam').each(function() {
            var s = $(this).index();
            $(this).find('.checkbox input').attr('id', 'ch' + s);
            $(this).find('.checkbox label').attr('for', 'ch' + s);
        });
    }

    $('.w_g_diam').on('click', '.z_add', function() {
        func();
        $('.g_diam').last().after(g_diam);
    });

    $('.w_g_diam').on('click', '.del', function() {
        func();
        var g_item = $('.g_diam').length;
        if (g_item > 1) {
            $(this).parents('.g_diam').remove();
        }
    });

    $('#material select').change(function() {
        cxxc = $('#material option:selected').attr('class');
        $('#thickness option').removeAttr('selected');
        $('#thickness select').hide();
        $('#thickness').find('.' + cxxc).css('display', 'block');
        cxxc = '.' + cxxc + ' option:selected';
    });

    $('#material select').trigger('change');
    $('.deliv_type').on('change', function() {
        var t = $('.deliv_type select option:selected').val();
        if (t == 2) {
            $('.deliverys2').css('opacity', 1);
        } else {
            $('.deliverys2').css('opacity', 0);
            $('.deliverys2 input').val(0);
        }
    });
    $('.amount_sum').click(function(event) {
        var sh = parseFloat($('.glass_calc').find('#g_width input').val());
        vi = parseFloat($('.glass_calc').find('#g_height input').val()),
        dos1 = $('.deliv_type').data('dos1'),
        dos2 = $('.deliv_type').data('dos2'),
        dos3 = $('.deliv_type').data('dos3'),
        minimal = $('.deliv_type').data('minimal'),
        maximum = $('.deliv_type').data('maximum'),
        deliveryName = $('.deliv_type select option:selected').text();
        if (deliveryName == "за пределы МКАД") {
            deliveryName = "за пределы МКАД (Расстояние от мкад в км.)" + $('.deliverys2 input').val();
        }
        ;var t = $('.deliv_type select option:selected').val();
        var deliv = 0;
        var km = 0;

        if (t == 1) {
            if (sh >= minimal || vi >= minimal) {
                if (sh >= maximum || vi >= maximum) {
                    deliv = dos2;
                } else if (sh <= maximum || vi <= maximum) {
                    deliv = dos1;
                }
            } else {
                deliv = dos1;
            }
        }
        ;
        if (t == 2) {
            km = parseFloat($('.deliverys2 input').val()) * dos3;
            if (sh >= minimal || vi >= minimal) {
                if (sh >= maximum || vi >= maximum) {
                    deliv = dos2;
                } else if (sh <= maximum || vi <= maximum) {
                    deliv = dos1;
                }
            }
        }
        ;
        var $calc_wrap = $('.glass_calc'), width = parseFloat($calc_wrap.find('#g_width input').val() / 1000), height = parseFloat($calc_wrap.find('#g_height input').val() / 1000), rb = $calc_wrap.find('.radio input:checked').val(), //rb = rb > 0 ? rb : 'форма изделия не выбрана', // Форма выбранного изделие
        m_price = $calc_wrap.find(cxxc).val(), // Cтоимость выбранного материала
        plenka = parseFloat($calc_wrap.find('#check1:checked').val()), zakalka = $('#check222').is(':checked'), plenka = plenka > 0 ? plenka : 0, vnesh = $calc_wrap.find('.vnn').data('vnesh'), vnutr = $calc_wrap.find('.vnu').data('vnut'), vnesh_val = parseFloat($calc_wrap.find('.vnn').val()), vnutr_val = parseFloat($calc_wrap.find('.vnu').val()), upakovka_karton = parseFloat($calc_wrap.find('#check2:checked').val()), obrbotka_kromki = parseFloat($calc_wrap.find('#edging option:selected').val()), // стоимость выбранной обработка кромки
        obrbotka_kromki = obrbotka_kromki > 0 ? obrbotka_kromki : 0, upakovka_karton = upakovka_karton > 0 ? upakovka_karton : 0, // стоимость упаковки картоном
        square = (width * height), // площадь
        perimeter = ((width + height) * 2), // периметр
        stiomost_plenki = plenka * square, // стоимость пленки
        virez_vnesh = vnesh * vnesh_val, // стоимость внешнего выреза
        virez_vnutr = vnutr * vnutr_val, // стоимость внутреннего выреза
        facett = $('#edging option:selected').text(), fcc = "Фацет", total = 0, mat = $('#material option:selected').text(), tol = $('#thickness .select_sel:visible option:selected').text(), ves = 0, ves = $('#thickness .select_sel:visible option:selected').data('ves') * square, kr = $('#edging option:selected').text(), fc = $('#w_facet option:selected').text(), fc = ' ' + fc, allparams, zakalka = zakalka > 0 ? 'да' : 'нет', pl = plenka > 0 ? 'да' : 'нет', uk = upakovka_karton > 0 ? 'да' : 'нет', textarea = $('.frm_bot .commentari');

        var ff1 = $('#edging option:selected').text()
          , ff2 = "Фацет";
        if (ff1 == ff2) {
            fc = '\n' + 'Ширина фацета' + fc;
        } else {
            fc = " ";
        }

        if (fcc == facett) {
            obrbotka_kromki = parseFloat($('.glass_calc').find('.sell2 option:selected').val());
            obrbotka_kromki = obrbotka_kromki > 0 ? obrbotka_kromki : 0;
        } else {
            obrbotka_kromki
        }
        ;var ss = 0;
        $('.vv').text(ves.toFixed(1));

        $('.g_diam').each(function() {
            var self = $(this);
            self.find('.cc').each(function() {
                var ott = parseFloat($(this).data('ot'))
                  , doo = parseFloat($(this).data('do'))
                  , znacheniya = self.find('.pr').val()
                  , vals = parseFloat($(this).parents('.g_diam').find('#g_c input').val())
                  , zenkovka = parseFloat(self.find('.zenkovka input:checkbox:checked').val())
                  , zenkovka = zenkovka > 0 ? zenkovka * vals : 0;
                if (znacheniya >= ott && znacheniya <= doo) {
                    sum_d = ($(this).data('sum') * vals) + zenkovka;
                    // сумма каждого диаметра
                    ss += sum_d;
                }
            });
        });

        var i, c = $('.g_diam')
        zzz = [];

        c.each(function(i) {
            var $this = $(this);
            var dd = $this.find('.g_dd input').val();
            var ottv = $this.find('.g_cc input').val();
            var z = $this.find('.zenkovka input').is(':checked');
            dd = 'Диаметр ' + dd + 'мм';
            ottv = 'Кол-во ' + ottv + ' шт';
            z = z ? " зенковка - да" : " зенковка - нет";
            zzz[i] = dd + ', ' + ottv + z;
        });

        var vibor = $('.frm_izd input:radio:checked').val();

        if (zakalka == "да") {
            zakk = (square * 850);
        } else {
            zakk = 0;
        }
        ;total = (m_price * square) + (obrbotka_kromki * perimeter);
        total = total + stiomost_plenki + upakovka_karton;
        total = total + virez_vnesh + virez_vnutr + ss + zakk;
        total = vibor == "Круг" ? km + deliv + (total * 3) : km + total + deliv;
        ves = ves.toFixed(1);

        $('.all_price').text(total.toFixed(2));
        allparams = mat + ', ' + 'Толщина: ' + tol + '\n' + 'Ширина: ' + width * 1000 + 'мм' + '\n' + 'Высота: ' + height * 1000 + 'мм' + '\n' + 'Обработка кромки: ' + kr + fc + '\n' + 'Защитная пленка - ' + pl + '\n' + 'Упаковка в картон - ' + uk + '\n' + 'Закалка - ' + zakalka + '\n' + 'Вырезы внутренний ' + vnutr_val + ' шт' + '\n' + 'Вырезы внешний ' + vnesh_val + ' шт' + '\n' + zzz.join('\n') + '\n' + 'Доставка - ' + deliveryName + '\n' + 'Итого: ' + total.toFixed(2) + 'руб.' + '\n' + 'Вес изделия: ' + ves + ' кг';
        textarea.html(allparams);
    });

});
