$(document).ready(function () {

    //const date = new Date();
    //const _date = date.toLocaleDateString('en-GB', {
    //    day: '2-digit', month: 'short', year: 'numeric'
    //}).replace(/ /g, '-');
    //$("#valid_from").val(_date);
    //$("#valid_from").flatpickr({
    //    dateFormat: "d-M-Y"
    //    //,maxDate: "today"
    //});
    //$("#valid_to").val();//_date
    //$("#valid_to").flatpickr({
    //    dateFormat: "d-M-Y"
    //    //,minDate: "today"
    //});
    //$("#from_date").val(_date);
    //$("#from_date").flatpickr({
    //    dateFormat: "d-M-Y"
    //    //,maxDate: "today"
    //});

    // Attach keydown event to input, textarea, and select fields
    $('input, textarea, select').keydown(function (e) {
        if (e.key === 'Enter') { // Check if the Enter key is pressed
            e.preventDefault(); // Prevent the default Enter key behavior

            // Find the next visible input, textarea, or select field
            var fields = $('input:visible, textarea:visible, select:visible'); // Get all visible input, textarea, and select fields
            var idx = fields.index(this); // Get the index of the current field

            // Focus the next field if it exists
            if (idx + 1 < fields.length) {
                fields.eq(idx + 1).focus();
            }
        }
    });
});

function onBegin() {
	$("#dvProcessing").show();
};

function onSuccess(data) {
	if (data.Status) {
		showAlert(data.Message, "Success","Ok", data.RedirectUrl);
	} else {
        showAlert(data.Message, "Error", "Ok", data.RedirectUrl);
	}
}

function OnFailure(response) {
	showAlert("Something goes wrong, please try again later.", "Error", "OkCancel");
}

$("#btnReset").click(function () {    
    location.reload();
});





$(".DigitsOnly").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        //$("#errmsg").html("Digits Only").show().fadeOut("slow");
        return false;
    }
});

function ClientEmailCheck(val) {
    var theurl = $(val).value

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(theurl) || $(val).value == "") {
        return (true)
    }
    alert("Invalid E-mail address! Please re-enter.")
    $(val).value = "";
    $(val).focus();
    return (false)
}

//$("#ddlState").change(function () {
    
//    var id = $("#ddlState").val();
//    if (id > 0) {
//        var _val = $("#ddlState").val();
//        var ddlDistrict = $('#ddlDistrict');
//        ajaxbind_Data('District', _val, ddlDistrict);
//    }
//});

//$("#ddlState").change(function () {

//    var id = $("#ddlState").val();
//    if (id > 0) {
//        var _val = $("#ddlState").val();
//        var ddlCity = $('#ddlCity');
//        ajaxbind_Data('StateWiseCity', _val, ddlCity);
//    }
//});

//$("#ddlDistrict").change(function () {

//    var id = $("#ddlDistrict").val();
//    if (id > 0) {
//        var _val = $("#ddlDistrict").val();
//        var ddlCity = $('#ddlCity');
//        ajaxbind_Data('City', _val, ddlCity);
//    }
//});

//$("#ddlDistrict").change(function () {

//    var id = $("#ddlDistrict").val();
//    if (id > 0) {
//        var _val = $("#ddlDistrict").val();
//        var ddlCity = $('#ddlCity');
//        ajaxbind_Data('City', _val, ddlCity);
//    }
//});

//$("#ddlCategory").change(function () {
//    //debugger
//    var id = $("#ddlCategory").val();
//    if (id > 0) {
//        var _val = $("#ddlCategory").val();
//        var ddlSubCategory = $('#ddlSubCategory');
//        ajaxbind_Data('SubCategoryByCategoryId', _val, ddlSubCategory);
//    }
//});

//function ajaxbind_Data(flag, val, ddlId) {
   
//    var _url =  baseUrl + "/Common/Common/BindData";
//    $.ajax({
//        //url: baseUrl + "Common/Common/BindData",
//        url: _url,
//        type: 'GET',
//        dataType: "json",
//        data: {
//            flag: flag,
//            id: val
//        },
//        beforeSend: function () {
           
//            ddlId.val("").html("");
//            ddlId.append($("<option></option>").val('').text('please wait...'));
//        },
//        success: function (result) {
           
//            ddlId.val('').html('');
//            ddlId.append($("<option></option>").val('').html('Select'));
//            $.each(result, function (i, res) {
               
//                ddlId.append($("<option></option>").val(res.Id).text(res.Name));
//            });
//        },
//        error: function () {
           
//            console.log(flag + ' Error!');
//        }
//    });
//}

    //$("#email_id").keyup(function () {
    //    
    //    var email = $('#email_id').val();
    //    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //    if (email.match(mailformat)) {
    //        alert("Valid email address!");
    //        $('#spnemail_id').hide();
    //        return true;
    //    }
    //    else {
    //        alert("You have entered an invalid email address!");
    //        $('#spnemail_id').show();
    //        $('#email_id').val('');
    //        $('#email_id').focus();
    //        return false;
    //    }

    //    //var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
    //    //if (!re) {
    //    //    $('#spnemail_id').show();
    //    //} else {
    //    //    $('#spnemail_id').hide();
    //    //}
    //});
$("#email_id").keyup(function () {
    if (validateEmail()) {
        $('#spnemail_id').hide();
    }
    else {
        $('#spnemail_id').show();
    }
});
function validateEmail() {
    var email = $('#email_id').val();
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
        return true;
    }
    else {
         return false;
    }
}

$("#mobile_no").on("blur", function () {
    var mobNum = $(this).val();
    var filter = /^\d*(?:\.\d{1,2})?$/;

    if (filter.test(mobNum)) {
        if (mobNum.length == 10) {
            //alert("valid");
            $('#spnmobile_no').hide();
        } else {
            //alert('Please put 10  digit mobile number');
            $('#spnmobile_no').show();
            return false;
        }
    }
    else {
        alert('Not a valid number');       
        return false;
    }

});


//$("#mobile_no").keyup(function () {
//    
//    var $this = $(this);
//    var regex = new RegExp("^[0-9\b]+$");
//    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
//    // for 10 digit number only
//    if ($this.val().length > 9) {
//        e.preventDefault();
//        $('#spnmobile_no').show();
//        return false;
//    }
//    if (e.charCode < 54 && e.charCode > 47) {
//        if ($this.val().length == 0) {
//            e.preventDefault();
//            $('#spnmobile_no').show();
//            return false;
//        } else {
//            $('#spnmobile_no').hide();
//            return true;
//        }

//    }
//    if (regex.test(str)) {
//        return true;
//    }
//    e.preventDefault();
//    return false;
//});

