import { Kaitlente } from "./Kaitlente.js";

// h1 yra virtuve
// h1 bus dirbtuve

const kaitlenciuKiekis = 5;

//const h1DOM = document.querySelectorAll
const h1DOM = document.querySelector('h1')
console.log(h1DOM);

for (let i = 1; i <= kaitlenciuKiekis; i++) {
    const irenginys = new Kaitlente(i);
    irenginys.render();
    
}