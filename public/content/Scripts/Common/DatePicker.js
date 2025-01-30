//Date
const date = new Date();
const _date = date.toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
}).replace(/ /g, '-');
$("#txtFrom_Date").val(_date);
$("#txtFrom_Date").flatpickr({
    dateFormat: "d-M-Y",
    maxDate: "today"
});

$("#txtTo_Date").val(_date);
$("#txtTo_Date").flatpickr({
    dateFormat: "d-M-Y",
    maxDate: "today"
});