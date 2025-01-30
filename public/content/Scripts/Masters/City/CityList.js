

var baseUrl = $('base').attr('href').slice(0, -1);
var dtlist;

$(function () {
    GetList();
});

function GetList() {
    
    var _url =  "/Masters/CityData/City_List";
    var Search = $("#txtSearch").val();
    dtlist = $("#dtlist").DataTable({
        "ajax": {
            "url": _url,
            "type": "POST",
            "datatype": "json",
            "data": {
                City_Id: 1,
                Search: Search
            },
            beforeSend: function () {
                $('.tbl-scroll').attr('style', 'min-height: 176px');
            },
            error: function (jqXHR, textStatus, errorThrown) {

                $(".dataTables_processing").hide();
                console.log(errorThrown);
            }
        },
        dom: pagingCSS,
        "pagingType": pagingType,
        "pageLength": pageLength,
        "bDestroy": bDestroy,
        "bAutoWidth": bAutoWidth,
        "processing": true,
        "serverSide": serverSide,
        "filter": filter,
        responsive: responsive,
        language: language,
        "order": [[0, 'desc']],
        "columns": [
            {
                "data": "STATE_NAME", "name": "STATE_NAME", responsivePriority: 2
            },
            {
                "data": "DISTRICT_NAME", "name": "DISTRICT_NAME", responsivePriority: 0
            },
            {
                "data": "CITY_NAME", "name": "CITY_NAME", responsivePriority: 0
            },
            {
                "data": "CITY_CODE", "name": "CITY_CODE", responsivePriority: 1
            },                     
            {
                "data": "CREATED_BY", "name": "CREATED_BY", responsivePriority: 3
            },
            {
                "data": "CREATED_ON", "name": "CREATED_ON", responsivePriority: 4
            },
            {
                "data": "IS_ACTIVE", "name": "IS_ACTIVE", responsivePriority: 5,
                "render": function (data, type, row) {
                    if (data == "True") {
                        return '<span class="badge badge-success">Active</span>'
                    }
                    else {
                        return '<span class="badge badge-danger">In Active</span>'
                    }

                }
            },
            {
                "data": "CITY_ID", "name": "CITY_ID", "className": "text-center", "width": "43px", responsivePriority: 6, "orderable": false,
                "render": function (data, type, row) {
                    
                    return '<a class="tblBtn" href="' + baseUrl + '/Masters/CityData/Edit_City?ENCID=' + row.ENCID + '" title="Edit City" data-toggle="tooltip"><i class="bi bi-pencil"></i></a>';
                }
            }
        ],
        drawCallback: function () {
            $('[data-bs-toggle="tooltip"]').tooltip();
        }
    });
}



$("#btnReset").click(function () {
    location.reload();
});

$("#btnSearch").click(function () {
    GetList();
})