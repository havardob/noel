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