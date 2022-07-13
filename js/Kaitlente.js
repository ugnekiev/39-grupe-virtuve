class Kaitlente {
    constructor (skyliuKiekis) {
        this.Size = skyliuKiekis
    }

    render () {
        const mainDOM = document.querySelector('main');
        console.log(mainDOM);

        const HTML = `<div class="kaitlente" style="width: 362px;">
        <div class="top">
            <div class="skyle karsta"></div>
        </div>
        <div class="bottom">
            <div class="jungiklis ijungtas"></div>
        </div>
    </div>`;
    mainDOM.innerHTML += HTML;
    }
}

export {Kaitlente}