const UranusOverview = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Uranus')

    document.getElementById('img-planetas').src = "assets/planet-uranus.svg"

    document.getElementById('img-geology').src = "none"

}

const UranusInternalStructure = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Uranus#Internal_structure')

    document.getElementById('img-planetas').src = "assets/planet-uranus-internal.svg"

    document.getElementById('img-geology').src = "none"
}

const UranusSurfaceGeology = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Uranus#Surface_geology')

    document.getElementById('img-planetas').src = "assets/planet-uranus.svg"

    document.getElementById('img-geology').src = "assets/geology-uranus.png"
}

const ButtonStyle = () => {
    const Buttons = document.querySelectorAll('.buttons > button ');

    Buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            if (!button.matches(':focus')) {
                button.style.boxShadow = 'inset auto 0 0 #38384f';
                button.style.cursor = 'pointer';
                button.style.background = '#474747';
            }
        });

        button.addEventListener('mouseout', () => {
            if (!button.matches(':focus')) {
                button.style.boxShadow = 'none';
                button.style.background = 'none';
            }
        });

        button.addEventListener('focus', () => {
            button.style.background = '#1EC1A2';
        });
        button.addEventListener('blur', () => {
            button.style.background = 'none';
        });
    });
}

window.addEventListener('DOMContentLoaded', ButtonStyle);
