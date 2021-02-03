function islem(deger) {
    document.gosterge.sonuc.value += deger;
}

$(function () {
    $(".sonuc").click(function () {
        var sayi = eval($(".text").val());
        $(".text").val(sayi);
    });

    $(".silme").click(function () {
        $(".text").val(" ");
    });

    $(".geri").click(function () {
        var sayi = $(".text").val();
        $(".text").val(sayi.substring(0, sayi.length - 1));
    });

    $('.sayi,.isaret,.geri,.silme,.sonuc').mouseenter(function () {
        $(this).css('color', '#FF0000');
    });

    $('.sayi,.isaret,.geri,.silme,.sonuc').mouseleave(function () {
        $(this).css('color', 'black');
    });

});
