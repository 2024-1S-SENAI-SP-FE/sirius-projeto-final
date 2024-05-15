const SaturnOverview = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`

    document.getElementById("source-planetas").setAttribute("href", "https://en.wikipedia.org/wiki/Saturn")

    document.getElementById('img-planetas').src = "assets/planet-saturn.svg"

    document.getElementById('img-geology').src = "none"

}

const SaturnInternalStructure = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.`

    document.getElementById("source-planetas").setAttribute("href", "https://en.wikipedia.org/wiki/Saturn#Internal_structure")

    document.getElementById('img-planetas').src = "assets/planet-saturn-internal.svg"

    document.getElementById('img-geology').src = "none"
}

const SaturnSurfaceGeology = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.`

    document.getElementById("source-planetas").setAttribute("href", "https://en.wikipedia.org/wiki/Saturn#Surface_geology")

    document.getElementById('img-planetas').src = "assets/planet-saturn.svg"

    document.getElementById('img-geology').src = "assets/geology-saturn.png"
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
            button.style.background = '#CD5120';
        });
        button.addEventListener('blur', () => {
            button.style.background = 'none';
        });
    });
}

window.addEventListener('DOMContentLoaded', ButtonStyle);
