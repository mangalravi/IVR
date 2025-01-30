$('.selectsrch').select2({
    width: 'resolve',
    selectOnClose: true
});

$('.selectsrch').on('select2:open', function () {
    setTimeout(() => {
        const searchBox = document.querySelector('.select2-search__field');
        if (searchBox) searchBox.focus(); 
    }, 100);
});