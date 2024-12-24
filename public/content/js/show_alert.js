// Juqery PopUp
function showAlert(message, alertType, buttonType, redirectURL) {
  alertMessage(message, alertType, buttonType, redirectURL);
}
function closePopUp() {
  $("#divPopUpAlert").html("");
}

//Confirmation Alert
function ConfirmationAlert(message, alertType, buttonType, calledFunction) {
  alertMessage(message, alertType, buttonType, "", calledFunction);
}

function alertMessage(
  message,
  alertType,
  buttonType,
  redirectUrl,
  calledFunction
) {
  var buttonOK = "";
  var buttonCancel = "";
  switch (buttonType) {
    case "OkCancel":
      buttonOK = "Ok";
      buttonCancel = "Cancel";
      break;
    case "YesNo":
      buttonOK = "Yes";
      buttonCancel = "No";
      break;
    default:
      buttonOK = "Ok";
      break;
  }

  var className = "";
  var type = "";
  var icon = "";
  switch (alertType) {
    case "Success":
      className = "successModal";
      type = "Successful";
      icon =
        '<div className="cmIcon"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"> <circle className="path circle" fill="none" stroke="#1cc185" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" /> <polyline className="path check" fill="none" stroke="#1cc185" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="90.2,40.2 51.5,85.8 28.8,67.5 " /> </svg></div>';
      break;
    case "Error":
      className = "dangerModal";
      type = "Error";
      icon =
        '<div className="cmIcon"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"> <circle className="path circle" fill="none" stroke="#dc3545" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" /> <line className="path line" fill="none" stroke="#dc3545" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3" /> <line className="path line" fill="none" stroke="#dc3545" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2" /> </svg></div>';
      break;
    case "Warning":
      className = "warningModal";
      type = "Warning";
      icon =
        '<div className="cmIcon"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"> <circle className="path circle" fill="none" stroke="#FABE14" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" /> <line className="path line" fill="none" stroke="#FABE14" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10" x1="65.1" y1="37.9" x2="65.1" y2="75.3" /> <line className="path line" fill="none" stroke="#FABE14" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10" x1="65.1" y1="90.9" x2="65.1" y2="92.3" /> </svg> </div>';
      break;
    case "Info":
      className = "infoModal";
      type = "Info";
      icon =
        '<div className="cmIcon"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"> <circle className="path circle" fill="none" stroke="#0dcaf0" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" /> <line className="path line" fill="none" stroke="#0dcaf0" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10" x1="65.1" y1="37.9" x2="65.1" y2="75.3" /> <line className="path line" fill="none" stroke="#0dcaf0" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10" x1="65.1" y1="90.9" x2="65.1" y2="92.3" /> </svg> </div>';
      break;
  }

  var buttonHtml = "";
  var onclick = "";

  if (IsNull(redirectUrl) && IsNull(calledFunction)) {
    buttonHtml =
      '<a className="btn btn-primary btn-sm btnCModal" href="javascript:;" onClick="closePopUp();">' +
      buttonOK +
      "</a>";
  } else if (!IsNull(calledFunction)) {
    buttonHtml =
      '<a className="btn btn-primary btn-sm btnCModal" href="javascript:;" onClick="' +
      calledFunction +
      '; closePopUp();">' +
      buttonOK +
      "</a>";
  } else {
    buttonHtml =
      '<a className="btn btn-primary btn-sm btnCModal" href="' +
      baseUrl +
      redirectUrl +
      '">' +
      buttonOK +
      "</a>";
  }

  if (!IsNull(buttonCancel)) {
    buttonHtml =
      buttonHtml +
      '<a className="btn btn-secondary btn-sm btnCModal" href="javascript:;" onClick="closePopUp();">' +
      buttonCancel +
      "</a>";
  }

  var alertHtml =
    '<div id="dvalert" className="customModal ' +
    className +
    '">' +
    '<div className="cModal">' +
    '<div className="cmBody text-center">' +
    icon +
    '<div className="cmMessage">' +
    '<div className="cmTitle">' +
    type +
    "</div>" +
    '<div className="cmMess">' +
    message +
    "</div>" +
    "</div>" +
    '<div className="cmButton">' +
    buttonHtml +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";

  $("#divPopUpAlert").html(alertHtml);
}
