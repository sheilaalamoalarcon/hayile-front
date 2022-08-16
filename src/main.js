/* eslint-disable indent */
const inputSearcher = document.getElementById("input-search");
const arrayUlSections = document.getElementsByClassName("file__section");

const searchShortcuts = () => {
    const typedWords = inputSearcher.value.toLowerCase();
    for (let i = 0; i < arrayUlSections.length; i++) {
        const ulSection = arrayUlSections[i];
        const li = ulSection.getElementsByTagName("li");
        for (let j = 0; j < li.length; j++) {
            const p = li[j].getElementsByTagName("p")[0];
            if (p.innerHTML.toLowerCase().indexOf(typedWords) > -1) {
                li[j].style.display = "";
            } else {
                li[j].style.display = "none";
            }
        }
    }
    hideEmptySections();
};
const hideEmptySections = () => {
    for (let i = 0; i < arrayUlSections.length; i++) {
        const ulSection = arrayUlSections[i];
        const li = ulSection.getElementsByTagName("li");
        let count = 0;
        for (let j = 0; j < li.length; j++) {
            if (li[j].style.display === "none") {
                count++;
            }
        }
        if (count === li.length) {
            ulSection.style.display = "none";
        } else {
            ulSection.style.display = "";
        }
    }
};
inputSearcher.addEventListener("keyup", searchShortcuts);
