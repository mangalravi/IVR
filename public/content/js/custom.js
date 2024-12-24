$(document).ready(function() {
  // Initialize flatpickr for datepicker elements
  $(".datepicker").flatpickr({
    dateFormat: "d-M-Y",
    minDate: "today",
    locale: "en",
  });

  // Toggle 'expand' class for .app-header and .app-body when .tglbtn is clicked
  $(".tglbtn").on("click", function() {
    $(".app-header, .app-body").toggleClass("expand");
  });

  // Initialize Select2 on .select2lib elements
  $('.select2lib').select2({
    placeholder: "Select fruits"
  });

  // Listen for change event on Select2 elements
  $('.select2lib').on('change', function() {
    console.log("Selected fruits: ", $(this).val());
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

