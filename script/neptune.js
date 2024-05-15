const NeptuneOverview = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Neptune')

    document.getElementById('img-planetas').src = "assets/planet-neptune.svg"

    document.getElementById('img-geology').src = "none"

}

const NeptuneInternalStructure = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Neptune#Internal_structure')

    document.getElementById('img-planetas').src = "assets/planet-neptune-internal.svg"

    document.getElementById('img-geology').src = "none"
}

const NeptuneSurfaceGeology = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Neptune#Surface_geology')

    document.getElementById('img-planetas').src = "assets/planet-neptune.svg"

    document.getElementById('img-geology').src = "assets/geology-neptune.png"
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
            button.style.background = '#2D68F0';
        });
        button.addEventListener('blur', () => {
            button.style.background = 'none';
        });
    });
}

window.addEventListener('DOMContentLoaded', ButtonStyle);
