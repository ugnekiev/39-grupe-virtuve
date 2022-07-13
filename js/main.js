import { Kaitlente } from "./Kaitlente.js";

// h1 yra virtuve
// h1 bus dirbtuve

const kaitlenciuKiekis = 3;

//const h1DOM = document.querySelectorAll
const titleDOM = document.querySelector('.title')
titleDOM.innerText = `Dirbtuve (${kaitlenciuKiekis})`;

//console.log(h1DOM.innerText);
//console.log(h1DOM.textContent);
document.querySelector('main').textContent = '';
for (let i = 1; i <= kaitlenciuKiekis; i++) {
    const irenginys = new Kaitlente(i);
    irenginys.render();
}

// h1 tampa BOLD kai skyliu skaicius lyginis
if (kaitlenciuKiekis % 2 === 0) {
    titleDOM.classList.add('bold');
}

// h1 tampa raudonas kai nors viena skyle ijungta
if (document.querySelector('.karsta')) {
    titleDOM.classList.add('red');
}
