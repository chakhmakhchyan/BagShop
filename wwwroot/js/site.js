// Write your Javascript code.
function OpenInNewTab(url) {
    //alert(url);
    var win = window.open(url, '_blank');//_self
    win.focus();
}