﻿var pagingCSS = "<'tbl-scroll1'tr><'dtpg'<'dtpginn'<'dtinfo'i><'dtcntrls'p>>>";
var pagingType = "ugopagi";
var pageLength = 5;
var bDestroy = true;
var bAutoWidth = false;
var processing = false;
var serverSide = true;
var filter = false;
var responsive = true;
var language = {
    "processing": '<img src="/images/loader.svg" alt="Loader" class="loaderImg"/>',
    searchPlaceholder: 'Search...',
    paginate: {
        //first: '<i class="bi bi-chevron-double-left"></i>', // or '>>'
        next: '<i class="bi bi-chevron-right"></i>', // or '>'
        previous: '<i class="bi bi-chevron-left"></i>', // or '<' 
        //last: '<i class="bi bi-chevron-double-right"></i>' // or '<<'  
    }
};