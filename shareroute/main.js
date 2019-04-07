document.addEventListener("DOMContentLoaded", function (event) {
    let ib = document.getElementById("imagebox");
    const pagecount = 25;
    let html = "<div id='imagebox'>";
    for (let i = 0; i <= pagecount; i++) {
        html += "<img src='./slide/OK_HOW-" + i + ".jpg'>";
        console.log(html);
        if (i === pagecount) {
            html += "</div>";
            ib.outerHTML = html;
        }
    }
});