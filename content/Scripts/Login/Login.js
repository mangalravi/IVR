
//Base URL
var baseUrl = ($('base').attr('href').slice(0, -1));

$(document).ready(function () {
    $("#dvVarify").removeClass("d-none");
});
//Enter button
$(document).on('keypress', function (e) {
    if (e.which == 13) {
        if ($("#txtcompanydomain").val() == null || $("#txtcompanydomain").val() == undefined) {
            Login();
        }
        else {
            Varifycompanydomain();
        }
    }
});


function Verifycompanydomain() {
    $("#dvProcessing").removeClass("d-none");
    var companydomain = $("#txtcompanydomain").val();
    $("#hdncompanydomain").val($("#txtcompanydomain").val());
    var _url = baseUrl + "/Account/VerifyCompanyDomain";
    $.ajax({
        type: "POST",
        url: _url,
        data: {
            COMPANY_DOMAIN: companydomain.trim()
        },
        success: function (response) {
            
            if (response.data.Status == true) {
                $("#hdncompany_id").val(response.data.Data.COMPANY_ID);
                $("#spncompanyName").html(response.data.Data.COMPANY_NAME)
                $("#dvLogin").removeClass("d-none");
                $("#dvVarify").addClass("d-none");
                $("#dvProcessing").addClass("d-none");
            } else {
                showAlert("Invalid Domain Name !", "Warning", "");
                $("#dvProcessing").addClass("d-none");
            }
        }
    });
}

function Login() {
    
    $("#dvProcessing").removeClass("d-none");
    var user_code = $("#LOGIN_ID").val();
    var password = $("#PASSWORD").val();
    var company_id = $("#hdncompany_id").val().trim();
    var companydomain = $("#hdncompanydomain").val();
    var _url = baseUrl + "/Account/UserLogin";
    $.ajax({
        type: "POST",
        url: _url,
        data: {
            LOGIN_ID: user_code.trim(),
            PASSWORD: password.trim(),
            COMPANY_ID: company_id.trim(),
            COMPANY_DOMAIN: companydomain
        },
        success: function (response) {
            if (response.Status == true) {
                $("#dvProcessing").addClass("d-none");
                setTimeout(function () { window.location.href = "" + baseUrl + "DashBoard"; }, 1000);
               // setTimeout(function () { window.location.href = "" + baseUrl + "/Manage_Entry/ManageEntry/Index"; }, 1000);
            }
            else {
                onSuccess(response);
            }
        }

    });
}

function onSuccess(data) {
    if (data.Status) {
        showAlert(data.Message, "Success", data.RedirectUrl);
    } else {
        $("#dvProcessing").addClass("d-none");
        showAlert(data.Message, "Warning", data.RedirectUrl);
    }
}