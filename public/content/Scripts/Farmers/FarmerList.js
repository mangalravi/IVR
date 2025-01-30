

//var baseUrl = $('base').attr('href').slice(0, -1);
var dtlist;

$(function () {
    GetList();
});

$("#txtSearch").on("change", function () {
    GetList();
})
$("[type='radio'][name='rdVerified']").on("change", function () {
    GetList();
});
$("#ddlState").on("change", function () {
    bindDynamicDropdown("#ddlState", "", "", "#ddlDistrict", "/Common/Common/BindData", 'District', 'Select District');
    GetList();
})

function GetList() {
    
    var Search = $("#txtSearch").val();
    var verified = $("[name='rdVerified']:checked").val();
    var State = '';
   if($("#ddlState :selected").text() != "Select State"){
        State = $("#ddlState :selected").text();
    }
    dtlist = $("#Entrytbl").DataTable({
        "ajax": {
            "url": "/Farmers/Farmer/Farmer_List",
            "type": "POST",
            "datatype": "json",
            "data": {
                SEARCH: Search,
                VERIFIED: verified,
                STATE: State
            },
            beforeSend: function () {
                $('.tbl-scroll').attr('style', 'min-height: 176px');
            },
            error: function (jqXHR, textStatus, errorThrown) {

                $(".dataTables_processing").hide();
                console.log(errorThrown);
            }
        },
        "dom": pagingCSS,
        "pagingType": pagingType,
        "pageLength": pageLength,
        "bDestroy": bDestroy,
        "bAutoWidth": bAutoWidth,
        "processing": true,
        "serverSide": serverSide,
        "filter": filter,
        "responsive": responsive,
        "language": language,
        "order": [[2, 'desc']],
       /* responsive: true,*/
        "columns": [
            {
                "data": "PHONE_NO", "name": "PHONE_NO", responsivePriority: 2
            },
            {
                "data": "NAME", "name": "NAME", responsivePriority: 0
            },
            {
                "data": "STATE", "name": "STATE", responsivePriority: 0
            },
            {
                "data": "DISTRICT", "name": "DISTRICT", responsivePriority: 1
            },                     
            {
                "data": "CHANNEL", "name": "CHANNEL", responsivePriority: 3
            },
            {
                "data": "REGISTERED_ON", "name": "REGISTERED_ON", responsivePriority: 4
            },
            {
                "data": "VERIFIED", "name": "VERIFIED", responsivePriority: 5,
                "render": function (data, type, row) {
                    if (data == "V") {
                        return '<span class="badge bg-grn">Verified</span>'
                    }
                    else {
                        return '<span class="badge bg-inf">UnVerified</span>'
                    }

                }
            },
            {
                "data": "ID", "name": "ID", "className": "text-center", "width": "43px", responsivePriority: 6, "orderable": false,
                "render": function (data, type, row) {
                    
                    return '<div class="d-flex align-items-center gap-2"> <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><img src="/images/view.svg" alt="view"></a>' +
                        '<a href = "#" ><img src="/images/edit.svg" alt="edit"></a>' +
                  '<a href="#"><img src="/images/sync.svg" alt="sync" /></a></div>';
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