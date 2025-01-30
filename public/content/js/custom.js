$(document).ready(function() {
  // Initialize flatpickr for datepicker elements
  $(".datepicker").flatpickr({
    dateFormat: "d-M-Y",
    minDate: "today",
    locale: "en",
  });
    $(".prevdatepicker").flatpickr({
        dateFormat: "d-M-Y",
         locale: "en",
    });




    //for adding tr in family table start

    // Add event listener to "Add Family" button
    const addButton = document.querySelector("button#add-family-member");
    if (addButton) {
        addButton.addEventListener("click", addFamilyMember);
    }

    function addFamilyMember() {
        // Get the table body element
        const tbody = document.querySelector("table.createtbl tbody");

        if (!tbody) {
            console.error("Table body not found.");
            return;
        }

        // Get all rows in the table body
        const rows = tbody.querySelectorAll("tr");

        // Get values from the first row for validation
        const nameInput = rows[rows.length - 1].querySelector("td:nth-child(2) input");
        const relationInput = rows[rows.length - 1].querySelector("td:nth-child(3) input");

        // Ensure both "Member's Name" and "Relation" are filled
        if (nameInput.value.trim() === "" || relationInput.value.trim() === "") {
            alert("Please fill in both 'Member's Name' and 'Relation'.");
            return; // Don't add a new row if fields are empty
        }

        // Create a new row
        const newRow = document.createElement("tr");

        // Get the next sequential SR. number
        const nextSrNumber = rows.length + 1;

        // Add the contents of the new row
        newRow.innerHTML = `
        <td><input type="text" class="form-control" value="${nextSrNumber}" disabled></td>
        <td><input type="text" class="form-control"></td>
        <td><input type="text" class="form-control"></td>
        <td>
            <div class="d-flex align-items-center gap-2">
                <div class="position-relative">
                    <input type="text" class="prevdatepicker form-control bigfs" placeholder="dd-mmm-yyyy">
                    <img src="/images/calendar.svg" alt="calendar" class="position-absolute">
                </div>
                <button class="btn btnfmly d-flex align-items-center">
                    Family <span class="material-symbols-outlined">add</span>
                </button>
            </div>
        </td>
    `;

        // Append the new row to the table body
        tbody.appendChild(newRow);

        // Remove only the "Add Family" button from the last td of the previous row
        const lastRow = tbody.querySelectorAll('tr');
        const previousRow = lastRow[lastRow.length - 2]; // Get the second-to-last row

        if (previousRow) {
            const lastTd = previousRow.querySelector('td:last-child');
            if (lastTd) {
                const addButton = lastTd.querySelector('button');
                if (addButton) {
                    addButton.remove(); // Remove the "Add Family" button only
                }
            }
        }

        // Re-attach the event listener to the new "Add Family" button
        const newButton = newRow.querySelector("button");
        if (newButton) {
            newButton.addEventListener("click", addFamilyMember);
        }

        // Initialize flatpickr on the new date input field
        const newDateInput = newRow.querySelector('.prevdatepicker');
        if (newDateInput) {
            flatpickr(newDateInput, {
                dateFormat: "d-M-Y",
               locale: "en",
            });
        }
    }




    //for adding tr in family table ends



  // Toggle 'expand' class for .app-header and .app-body when .tglbtn is clicked
  $(".tglbtn").on("click", function() {
    $(".app-header, .app-body").toggleClass("expand");
  });

  // Initialize Select2 on .select2lib elements
  $('.select2lib').select2({
    //placeholder: "Select fruits"
  });

  // Listen for change event on Select2 elements
  $('.select2lib').on('change', function() {
   // console.log("Selected fruits: ", $(this).val());
  });
  //for select and focus of input field
  $('.actv').each(function() {
    const parentDiv = $(this);
    const inputField = parentDiv.find('.form-control.withselect');
    inputField.on('input', function() {
      parentDiv.toggleClass('filledcls', inputField.val().trim() !== '');
    });
    inputField.on('focus', function() {
      parentDiv.addClass('focusedcls');
    });
    inputField.on('blur', function() {
      parentDiv.removeClass('focusedcls');
    });
  });
});

//for tooltip
document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

//input validation
document.addEventListener("DOMContentLoaded", function() {
  // Select all elements with class 'inpvalid'
  const mobileInputs = document.querySelectorAll(".inpvalid");

  mobileInputs.forEach(function(mobileInput) {
    // Find the parent container once for each input
    const parentDiv = mobileInput.closest('.valideinpparent');

    mobileInput.addEventListener("input", function() {
      // Remove any non-numeric characters from the input
      let currentValue = mobileInput.value.replace(/[^0-9]/g, '');

      // Limit the input to a maximum of 10 digits
      if (currentValue.length > 10) {
        currentValue = currentValue.substring(0, 10); // Trim to 10 digits
      }

      // Set the value back to the input
      mobileInput.value = currentValue;

      // Check if the input length is exactly 10 digits
      if (currentValue.length === 10) {
        // Add the class if the mobile number has 10 digits
        parentDiv.classList.add("validationdone");
      } else {
        // Remove the class if the condition is not met
        parentDiv.classList.remove("validationdone");
      }
    });
  });
    //datatables

    $('#Entrytbl').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": true,
        "ordering": false,
        "searching": false,
        "info": true,
        "autoWidth": true,
        "responsive": true,
        "pageLength": 10,
        "language": {
            "emptyTable": "No data available in table",
            "lengthMenu": "Show _MENU_ entries",
            "search": "Search:",
            "info": "",
            "paginate": {
                "previous": "&lsaquo;", 
                "next": "&rsaquo;"     
            }
        },
        "infoCallback": function (settings, start, end, max, total, pre) {
            return start + '-' + end + ' of ' + total;
        },
        "responsive": {
            "details": {
                "type": "column",
                "target": "tr"
            },
            "breakpoints": [
                { "name": "desktop", "width": 1024 },
                { "name": "tablet", "width": 768 },
                { "name": "mobile", "width": 480 }
            ]
        }
    });

    });



//search icon hide when input have content
$(document).ready(function () {
    // Cache the search input and the icon element
    var $searchInput = $('#Entrytbl_filter input');
    var $searchIcon = $('.srchicn');

    // Function to toggle the search icon based on input value
    function toggleSearchIcon() {
        if ($searchInput.val() !== "") {
            // If there's text in the search input, hide the icon
            $searchIcon.css('display', 'none');
        } else {
            // If the search input is empty, show the icon
            $searchIcon.css('display', 'inline-block');
        }
    }

    // Initial check when the page loads
    toggleSearchIcon();

    // Watch for input events on the search box
    $searchInput.on('input', function () {
        toggleSearchIcon();
    });
});
//input validation
// Get all input fields with the class 'validationname'
const inputFields = document.querySelectorAll(".validationname");
// Loop through each input field
inputFields.forEach(inputField => {
    // Create the error message element for each input
    const errorMessage = document.createElement("div");
    errorMessage.style.color = "#f63";
    errorMessage.style.fontSize = "0.625rem";
    errorMessage.style.display = "none"; // Hide initially
    errorMessage.textContent = "Fill Proper Name";
    errorMessage.classList.add("errormsg");
        // Insert the error message below the current input field dynamically
    inputField.parentNode.appendChild(errorMessage);

    // Add an event listener to each input field
    inputField.addEventListener("input", function () {
        // Check if the value is less than 3 characters
        if (inputField.value.length < 3) {
            errorMessage.style.display = "block"; // Show error message
        } else {
            errorMessage.style.display = "none"; // Hide error message
        }
    });

    // Handle form submission (to prevent it if validation fails)
    const form = inputField.closest("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            if (inputField.value.length < 3) {
                errorMessage.style.display = "block"; // Show error on submit if invalid
                event.preventDefault(); // Prevent form submission
            }
        });
    }
});

  // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|in)$/;

    // Get all email input fields with the class 'validationemail'
    const emailFields = document.querySelectorAll(".validationemail");

    emailFields.forEach(inputField => {
        const parentContainer = inputField.closest(".valideinpparent"); // Get the parent container for each input
        
        // Flag to track if the email is valid
        let isValidEmail = false;

        // Add event listener for input event (triggered when user types)
        inputField.addEventListener("input", function() {
            const emailValue = inputField.value.trim(); // Get the value from the input
            const errorMessage = parentContainer.querySelector(".errormsg"); // Find the error message element in the parent

            // Check if the email matches the regular expression
            if (!emailRegex.test(emailValue)) {
                // If the error message doesn't exist, create it
                if (!errorMessage) {
                    const newErrorMessage = document.createElement("div");
                    newErrorMessage.classList.add("errormsg");
                    newErrorMessage.style.color = "#f63";
                    newErrorMessage.style.fontSize = "0.625rem";
                    newErrorMessage.style.display = "block";
                    newErrorMessage.textContent = "Enter a valid email";
                    parentContainer.appendChild(newErrorMessage);
                } else {
                    errorMessage.style.display = "block"; // Show existing error message
                }
                parentContainer.classList.remove("validationdone"); // Remove 'validationdone' class
                isValidEmail = false; // Set flag to false for invalid email
            } else {
                // If the email is valid, hide the error message
                if (errorMessage) {
                    errorMessage.style.display = "none"; // Hide the error message
                }
                parentContainer.classList.add("validationdone"); // Add 'validationdone' class to the parent
                isValidEmail = true; // Set flag to true for valid email
            }
        });

        // Handle form submission (to prevent it if validation fails)
        const form = inputField.closest("form");
        if (form) {
            form.addEventListener("submit", function(event) {
                const emailValue = inputField.value.trim();
                const errorMessage = parentContainer.querySelector(".errormsg"); // Find the error message in the parent

                if (!emailRegex.test(emailValue)) {
                    // If the email is invalid, show the error message
                    if (!errorMessage) {
                        const newErrorMessage = document.createElement("div");
                        newErrorMessage.classList.add("errormsg");
                        newErrorMessage.style.color = "#f63";
                        newErrorMessage.style.fontSize = "0.625rem";
                        newErrorMessage.style.display = "block";
                        newErrorMessage.textContent = "Enter a valid email";
                        parentContainer.appendChild(newErrorMessage);
                    }
                    parentContainer.classList.remove("validationdone"); // Remove 'validationdone' class
                    event.preventDefault(); // Prevent form submission
                } else {
                    // If the email is valid, add 'validationdone' class to parent
                    parentContainer.classList.add("validationdone");
                }
            });
        }
    });

//chekced
// Select all radio inputs
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Loop through each radio button
radioButtons.forEach(button => {
    // Add an event listener for the change event
    button.addEventListener('change', function () {
        // For each radio button, remove the 'checked' class from all spans
        radioButtons.forEach(button => {
            const label = button.closest('label');
            if (label) {
                const span = label.querySelector('span');
                if (span) {
                    span.classList.remove('checked');
                }
            }
        });

        // Add the 'checked' class to the span of the clicked radio button
        const label = this.closest('label');
        if (label) {
            const span = label.querySelector('span');
            if (span) {
                span.classList.add('checked');
            }
        }
    });
});

// Apply 'checked' class to the first span by default if it's the default checked radio button
const checkedRadio = document.querySelector('input[type="radio"]:checked');
if (checkedRadio) {
    const label = checkedRadio.closest('label');
    if (label) {
        const span = label.querySelector('span');
        if (span) {
            span.classList.add('checked');
        }
    }
}



//tooltip
document.addEventListener('DOMContentLoaded', function () {
    // Function to initialize tooltips on elements with data-bs-toggle="tooltip"
    function initializeTooltips() {
        // Get the tooltip elements dynamically after every table redraw
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

        tooltipTriggerList.forEach(function (tooltipTriggerEl) {
            // Ensure tooltip is initialized only once per element
            if (!tooltipTriggerEl._tooltip) {
                tooltipTriggerEl._tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
                    placement: 'top',   
                    offset: [0, -85], 
                    boundary: 'viewport', 
                    flip: true,       
                    container: 'body'   
                });
            }
        });
    }

    initializeTooltips();
    var table = $('#Entrytbl').DataTable();
    table.on('draw', function () {
        // Re-initialize tooltips after table redraw
        initializeTooltips();
    });
});

// Initialize tooltips for all elements with the class 'tooltipcstm'
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = Array.from(document.querySelectorAll('.tooltipcutm'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl, {
            offset: [0, -390] 
        });
    });
    //IVR
    var tooltipTriggerList = Array.from(document.querySelectorAll('.tooltipivr'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl, {
            offset: [0, -140]
        });
    });
    //SMS
    var tooltipTriggerList = Array.from(document.querySelectorAll('.tooltipsms'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl, {
            offset: [0, 10]
        });
    });
    //EMAIL
    var tooltipTriggerList = Array.from(document.querySelectorAll('.tooltipemail'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl, {
            offset: [0, -70]
        });
    });
    //WHAT'SAPP
    var tooltipTriggerList = Array.from(document.querySelectorAll('.tooltipwhatsp'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl, {
            offset: [0, -70]
        });
    });
});


//search icon
document.addEventListener('DOMContentLoaded', function () {
    // Select all the input fields with the class 'srchinp' and their corresponding icons
    const inputFields = document.querySelectorAll('.srchinp');

    // Loop through each input field and apply the functionality
    inputFields.forEach(function (inputField) {
        const icon = inputField.closest('.position-relative').querySelector('.material-symbols-outlined');

        // Function to toggle visibility based on input content or focus
        function toggleIconVisibility() {
            // Hide the icon if there's content or if the input field is focused
            if (inputField.value.trim() !== "" || document.activeElement === inputField) {
                icon.style.display = 'none'; // Hide the icon if input has content or is focused
            } else {
                icon.style.display = 'inline-block'; // Show the icon if input is empty and not focused
            }
        }

        // Listen for input changes for each input field
        inputField.addEventListener('input', toggleIconVisibility);

        // Listen for focus on the input field to hide the icon
        inputField.addEventListener('focus', toggleIconVisibility);

        // Listen for blur (losing focus) on the input field to recheck visibility
        inputField.addEventListener('blur', toggleIconVisibility);

        // Initial check when the page loads to handle pre-existing content
        toggleIconVisibility();
    });
});


$(document).ready(function () {
    // Initialize Select2 on the selectsrch class
    $(".selectsrch").select2({
        dropdownParent: $('#offcanvasExample') // Attach dropdown to the offcanvas
    });

    // Re-initialize Select2 when offcanvas is shown (needed for dynamic content)
    $('#offcanvasExample').on('shown.bs.offcanvas', function () {
        $(".selectsrch").select2({
            dropdownParent: $('#offcanvasExample') // Ensure Select2 dropdown is inside the offcanvas
        });
    });

    // Optional: Re-initialize Select2 when the offcanvas is hidden (if needed)
    $('#offcanvasExample').on('hidden.bs.offcanvas', function () {
        $(".selectsrch").select2({
            dropdownParent: $('#offcanvasExample') // Re-initialize after offcanvas is closed
        });
    });
});
//progress bar js start
// Function to update progress bar
function updateProgressBar() {
    let progress = 0;

    // Table 1 - Personal Information
    const personalFields = ['#dob', '#education', '#marital-status', '#mobile', '#email'];
    const totalPersonalFields = personalFields.length;
    let personalComplete = 0;

    personalFields.forEach(function (field) {
        const content = document.querySelector(field);
        if (content) {
            const textContent = content.textContent.trim();
            console.log('Personal Field:', field, 'Content:', textContent);
            if (textContent !== "" && textContent !== "-" && textContent !== "Assumed") {
                personalComplete++;
            }
        }
    });
    // Each field in this table contributes 33.33% / total fields
    progress += (personalComplete / totalPersonalFields) * 33.33;

    // Table 2 - Family Information (For 2 rows, 4 fields total)
    const familyFields = ['#member-name-1', '#relation-1', '#member-name-2', '#relation-2'];
    const totalFamilyFields = familyFields.length;
    let familyComplete = 0;

    familyFields.forEach(function (field) {
        const content = document.querySelector(field);
        if (content) {
            const textContent = content.textContent.trim();
            console.log('Family Field:', field, 'Content:', textContent);
            if (textContent !== "" && textContent !== "-") {
                familyComplete++;
            }
        }
    });
    // Each field in this table contributes 33.33% / total fields
    progress += (familyComplete / totalFamilyFields) * 33.33;

    // Table 3 - Address Information
    const addressFields = ['#pin-code', '#state', '#district', '#tehsil', '#block', '#village', '#address'];
    const totalAddressFields = addressFields.length;
    let addressComplete = 0;

    addressFields.forEach(function (field) {
        const content = document.querySelector(field);
        if (content) {
            const textContent = content.textContent.trim();
            console.log('Address Field:', field, 'Content:', textContent);
            if (textContent !== "" && textContent !== "-") {
                addressComplete++;
            }
        }
    });
    // Each field in this table contributes 33.33% / total fields
    progress += (addressComplete / totalAddressFields) * 33.33;

    // Round the progress to the nearest integer
    progress = Math.round(progress);

    // Debugging progress value
    console.log('Final Progress:', progress);

    // Update progress bar width
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    } else {
        console.error('Progress Bar element not found!');
    }

    // Update the progress text in the span
    const progressText = document.getElementById('progress-text');
    if (progressText) {
        progressText.innerText = progress + '%';
    } else {
        console.error('Progress Text element not found!');
    }
}

// Call the updateProgressBar function on page load
window.addEventListener('DOMContentLoaded', function () {
    updateProgressBar();
});


