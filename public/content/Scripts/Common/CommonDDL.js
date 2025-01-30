$(document).ready(function () { 
    // Bind the change event for ddlState
    $("#ddlState").change(function () {
        var id = $("#ddlState").val();
        if (id > 0) {
            bindDynamicDropdown("#ddlState", "", "", "#ddlCity", "/Common/Common/BindData", 'CITY_WITH_STATEID', 'Select City');
        }
    });
    $("#ddlDistrict").change(function () {
        var id = $("#ddlState").val();
        if (id > 0) {
            bindDynamicDropdown("#ddlState", "", "", "#ddlCity", baseUrl + "/Common/Common/BindData", 'district', 'Select City');
        }
    });
    //$("#ddlCity").change(function () {
    //    var id = $("#ddlState").val();
    //    if (id > 0) {
    //        bindDynamicDropdown("#ddlState", "", "", "#ddlCity", baseUrl + "/Common/Common/BindData", 'city', 'Select City');
    //    }
    //});
    // Bind Level Type
    $("#ddlProject").change(function () {        
        var id = $("#ddlProject").val();
        if (id > 0) {
            bindDynamicDropdown("#ddlProject", "", "", "#ddlLevelType", baseUrl + "/Common/Common/BindData", 'LEVEL_TYPE_BY_PRJ', 'Select Level');
        }
    });

    //Bind Zone
    $("#ddlLevel0").change(function () {        
        var id = parseInt($("#ddlLevel0").val(), 10);  // Ensure id is an integer
        if (id > 0) {
            bindDynamicDropdown("#ddlLevel0", "", "", "#ddlLevel1", baseUrl + "/Common/Common/BindData", 'LEVEL1_WITHID', 'Select Zone');
        }
    });
    //Bind Circle
    $("#ddlLevel1").change(function () {
        var id = $("#ddlLevel1").val();
        if (id > 0) {
            bindDynamicDropdown("#ddlLevel0", "#ddlLevel1", "", "#ddlLevel2", baseUrl + "/Common/Common/BindData", 'LEVEL2_WITHID', 'Select Circle');
        }
    });
    //Bind Division
    $("#ddlLevel2").change(function () {
        var id = $("#ddlLevel2").val();
        if (id > 0) {
            bindDynamicDropdown("#ddlLevel0", "#ddlLevel1", "#ddlLevel2", "#ddlLevel3", baseUrl + "/Common/Common/BindData", 'LEVEL3_WITHID', 'Select Division');
        }
    });
    //Bind Sub Division
    $("#ddlLevel3").change(function () {
        var id = $("#ddlLevel3").val();
        if (id > 0) {
            bindDynamicDropdown("#ddlLevel1", "#ddlLevel2", "#ddlLevel3", "#ddlLevel4", baseUrl + "/Common/Common/BindData", 'LEVEL4_WITHID', 'Select Division');
        }
    });
    $("#ddlBank").change(function () {
        var id = $("#ddlBank").val();
        if (id > 0) {
            bindDynamicDropdown("#ddlBank", "", "", "#ddlbankBranch", baseUrl + "/Common/Common/BindData", 'BANK_BRANCH_WITHID', 'Select Bank');
        }
    });
    $("#ddlbankBranch").change(function () {
        var id = $("#ddlbankBranch").val();
        if (id > 0) {
            bindDynamicDropdown("#ddlbankBranch", "", "", "#ddlifsc_Code", baseUrl + "/Common/Common/BindData", 'IFSC_CODE', 'Select Bank Branch');
        }
    });

    

});


function bindDynamicDropdown(parentSelector1, parentSelector2, parentSelector3, childSelector, url, flagName, defaultOption) {
    /*   $(parentSelector).change(function () {*/
    var selectedValue1 = $(parentSelector1).val(); // Get selected value from parent dropdown
    var selectedValue2 = $(parentSelector2).val(); // Get selected value from parent dropdown
    var selectedValue3 = $(parentSelector3).val(); // Get selected value from parent dropdown

    if (selectedValue1 == undefined) {
        selectedValue1 = 0;
    }
    if (selectedValue2 == undefined) {
        selectedValue2 = 0;
    }
    if (selectedValue3 == undefined) {
        selectedValue3 = 0;
    }    
    if (selectedValue1) {
        var childDropdown = $(childSelector); // Child dropdown element
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: {
                flag: flagName,
                param1: selectedValue1,
                param2: selectedValue2,
                param3: selectedValue3
            }, // Dynamic parameter name
            beforeSend: function () {
                childDropdown.empty().append($("<option></option>").val('').text('Please wait...'));
            },
            success: function (result) {
                var data = result.data; // Assuming result contains the child dropdown data
                childDropdown.empty().append($("<option></option>").val('').text(defaultOption));

                $.each(data, function (i, item) {
                    childDropdown.append($("<option></option>").val(item.Id).text(item.Value));
                });
            },
            error: function () {
                childDropdown.empty().append($("<option></option>").val('').text('Error loading data'));
            }
        });
    } else {
        // Clear child dropdown if no value is selected in the parent
        $(childSelector).empty().append($("<option></option>").val('').text(defaultOption));
    }
    //});
}

// check mandatory fields
function mandatoryFields(requiredId) {

    let errorMessage = '';
    let errorElement = document.getElementById('error');

    requiredId.forEach(function (id) {
        let field = document.getElementById(id);

        if (!field.value.trim()) {
            errorMessage += `${id} is required.<br/>`;
            field.style.borderColor = 'red'; // Highlight empty fields
        } else {
            field.style.borderColor = ''; // Reset border color if filled
        }
    });

    if (errorMessage) {
        alert(errorMessage);
        //errorElement.innerHTML = errorMessage;
        //errorElement.style.color = 'red'; // Display error messages
        return false;
    } else {
        //errorElement.innerHTML = '';
        return true;
        //alert('Form submitted successfully!');
        // Form submit logic goes here (e.g., AJAX call)
    }

}

function bindDynamicOnlyDropdown(parentSelector1, parentSelector2, parentSelector3, childSelector, url, flagName, defaultOption) {
    /*   $(parentSelector).change(function () {*/
    var selectedValue1 = $(parentSelector1).val(); // Get selected value from parent dropdown
    var selectedValue2 = $(parentSelector2).val(); // Get selected value from parent dropdown
    var selectedValue3 = $(parentSelector3).val(); // Get selected value from parent dropdown

    if (selectedValue1 == undefined) {
        selectedValue1 = 0;
    }
    if (selectedValue2 == undefined) {
        selectedValue2 = 0;
    }
    if (selectedValue3 == undefined) {
        selectedValue3 = 0;
    }


    //if (selectedValue1) {
        var childDropdown = $(childSelector); // Child dropdown element
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: {
                flag: flagName,
                param1: selectedValue1,
                param2: selectedValue2,
                param3: selectedValue3
            }, // Dynamic parameter name
            beforeSend: function () {
                childDropdown.empty().append($("<option></option>").val('').text('Please wait...'));
            },
            success: function (result) {
                var data = result.data; // Assuming result contains the child dropdown data
                childDropdown.empty().append($("<option></option>").val('-1').text(defaultOption));

                $.each(data, function (i, item) {
                    childDropdown.append($("<option></option>").val(item.Id).text(item.Value));
                });
            },
            error: function () {
                childDropdown.empty().append($("<option></option>").val('').text('Error loading data'));
            }
        });
    //} else {
    //    // Clear child dropdown if no value is selected in the parent
    //    $(childSelector).empty().append($("<option></option>").val('').text(defaultOption));
    //}
    //});
}