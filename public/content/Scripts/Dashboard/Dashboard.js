
$(document).ready(function () {
    var page_list = "";
    var serviceid = "1";
    $.ajax({
        type: "POST",
        url:  "/DashBoard/DashBoard/BindPages",
        dataType: "html",
        async: true,
        data: {
            service_id: serviceid,
            page: page_list
        },
        success: function (model) {
            $('#sidemenu').html(model);
        },
        error: function (data) {
            alert("Error");
        }

    });
    //dashboardSummary();
});


//get Dashboard Summary
function dashboardSummary() {
    $.ajax({
        url:  "/DashBoard/DashBoard/Summary",
        type: "POST",
        dataType: "html",
        data: {
            Level1_Id: 0,
            Level2_Id: 0,
            Level3_Id: 0,
            Level4_Id: 0,
        },
        beforeSend: function () {
            var html = '<div class="customLoader">'
                + '<img src="' + baseUrl + '/images/loader.svg" alt="Loader" class="loaderImg"/>'
                + '</div>';
            $("#dvSummary").html(html);
        },
        success: function (data) {
            $("#dvSummary").html(data);
        }

    });
}
