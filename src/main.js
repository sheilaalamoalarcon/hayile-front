/* eslint-disable indent */
function myFunction() {
    let input, filter, ul, li, p, i;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();

    ul = document.getElementsByClassName("myUl");
    for (i = 0; i < ul.length; i++) {
        li = ul[i].getElementsByTagName("li");
        for (let j = 0; j < li.length; j++) {
            p = li[j].getElementsByTagName("p")[0];
            if (p.innerHTML.toLowerCase().indexOf(filter) > -1) {
                li[j].style.display = "";
            } else {
                li[j].style.display = "none";
            }
        }
    }
}
