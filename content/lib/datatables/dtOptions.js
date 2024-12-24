var pagingCSS = "<'tbl-scroll1'tr><'dtpg'<'dtpginn'<'dtinfo'i><'dtcntrls'p>>>";
var pagingType = "ugopagi";
var pageLength = 15;
var bDestroy = true;
var bAutoWidth = false;
var processing = true;
var serverSide = true;
var filter = true;
var responsive = true;
var language = {
  processing:
    '<img src="' +
    baseUrl +
    '/images/loader.svg" alt="Loader" className="loaderImg"/>',
  searchPlaceholder: "Search...",
  paginate: {
    //first: '<i className="bi bi-chevron-double-left"></i>', // or '>>'
    next: '<i className="bi bi-chevron-right"></i>', // or '>'
    previous: '<i className="bi bi-chevron-left"></i>', // or '<'
    //last: '<i className="bi bi-chevron-double-right"></i>' // or '<<'
  },
};
