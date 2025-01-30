$(document).ready(function () {
	const date = new Date();
	const _date = date.toLocaleDateString('en-GB', {
		day: '2-digit', month: 'short', year: 'numeric'
	}).replace(/ /g, '-');
	$("#valid_from").val(_date);
	$("#valid_from").flatpickr({
		dateFormat: "d-M-Y"
		//,maxDate: "today"
	});
	$("#valid_from1").flatpickr({
		dateFormat: "d-M-Y"
		//,maxDate: "today"
	});
	$("#valid_to").val();//_date
	$("#valid_to").flatpickr({
		dateFormat: "d-M-Y"
		//,minDate: "today"
	});
	$("#from_date").val(_date);
	$("#from_date").flatpickr({
		dateFormat: "d-M-Y"
		//,maxDate: "today"
	});
})