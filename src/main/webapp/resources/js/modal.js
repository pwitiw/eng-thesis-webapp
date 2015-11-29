$('#edit-modal').on('show.bs.modal', function (e) {

    var $modal = $(this);
    var code = e.relatedTarget.id;
    var ss = e.relatedTarget.id;

    $modal.find('.edit-content').html(code);
    $.ajax({
        cache: false,
        type: 'POST',
        url: '/workers/delete',
        data: 'EID=' + code
    });
})


var deleteWorker = function (code) {

    $.ajax({
        cache: false,
        type: 'POST',
        url: '/workers/delete',
        data: 'code=' + code,
        success: function (data) {
            location.reload();
        }
    });
}

var editWorker = function (code) {

    $.ajax({
        cache: false,
        type: 'POST',
        url: '/workers/edit',
        data: 'code=' + code,
        success : function(data) {
            $("#response").html(data);
        }
    });
}

var position = function (number) {

    var result;

    switch (number) {
        case 1:
            result = "FREZARNIA";
            break;
        case 2:
            result = "CZYSZCZENIE"
            break;
        case 3:
            result = "PODK£ADOWNIA";
            break;
        case 4:
            result = "SZLIFIERNIA"
            break;
        case 5:
            result = "LAKIERNIA"
            break;
        case 6:
            result = "PAKOWANIA"
            break;
    }

    return result;

}
