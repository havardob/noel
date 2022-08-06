const html = document.querySelector('html');
const body = document.querySelector('body');
const themesPanel = document.getElementById('themepicker');
const themesToggle = document.getElementById('themepickerToggle');
const factList = document.getElementById('factList');
const factListToggle = document.getElementById('factListToggle');


themesToggle.addEventListener("click", function () {
    themesPanel.classList.toggle('is-open');
    themesToggle.classList.toggle('is-open');
})

var themeButtons = document.getElementsByClassName('theme-button');

for (var i = 0; i < themeButtons.length; i++) {
    themeButtons[i].onclick = changeTheme;
}

function changeTheme(clicked) {
    html.className = "";
    if (!html.classList.contains(this.id)) {
        html.classList.add(this.id);
        localStorage.setItem('theme', this.id);
    } else {
        html.classList.remove(this.id)
    }
}

function setStoredTheme() {
    var storedTheme = localStorage.getItem('theme');
    html.classList.add(storedTheme);
}

document.onload = setStoredTheme();

factListToggle.addEventListener("click", function () {
    factListToggle.classList.toggle('is-open');
    factList.classList.toggle('is-open');
    if (factListToggle.classList.contains('is-open')) {
        factListToggle.innerHTML = 'View fewer facts';
    } else {
        factListToggle.innerHTML = 'View all facts';
    }
})

const filterSearch = document.getElementById("filterSearch");
const filterNumOf = document.getElementById("filterNumOf");
const filterNumTot = document.getElementById("filterNumTot");
const filterEmptyState = document.getElementById("filterEmptyState");
let facts = document.querySelectorAll(".fact");

filterSearch.addEventListener("click", function(){
    factListToggle.style.display = "none";
        factList.classList.toggle("is-open");
})

setSearchResults(facts.length, facts.length);

function setSearchResults(numOf, numTot) {
    filterNumOf.innerText = numOf;
    filterNumTot.innerText = numTot;
}

filterSearch.addEventListener("keyup", function() {
    let searchValue = event.target.value.toLowerCase();
    let hits = 0;
    
    for (let i = 0; i < facts.length; i++) {
      let factText = facts[i].querySelector(".fact-info").innerText.toLowerCase();

      if (factText.includes(searchValue)) {
        facts[i].style.display = "flex";
        hits++;
    } else {
        facts[i].style.display = "none";
      }
    }

    if (hits !== 0) {
        filterEmptyState.style.display = "none";
    } else {
        filterEmptyState.style.display = "block";
    }

    setSearchResults(hits, facts.length);

}, false);
