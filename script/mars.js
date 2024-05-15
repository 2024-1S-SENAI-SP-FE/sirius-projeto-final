const MarsOverview = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`

    document.getElementById("source-planetas").setAttribute("href", "https://en.wikipedia.org/wiki/Mars")

    document.getElementById('img-planetas').src = "assets/planet-mars.svg"

    document.getElementById('img-geology').src = "none"

}

const MarsInternalStructure = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`

    document.getElementById("source-planetas").setAttribute("href", "https://en.wikipedia.org/wiki/Mars#Internal_structure")

    document.getElementById('img-planetas').src = "assets/planet-mars-internal.svg"

    document.getElementById('img-geology').src = "none"
}

const MarsSurfaceGeology = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`

    document.getElementById("source-planetas").setAttribute("href", "https://en.wikipedia.org/wiki/Mars#Surface_geology")

    document.getElementById('img-planetas').src = "assets/planet-mars.svg"

    document.getElementById('img-geology').src = "assets/geology-mars.png"
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
            button.style.background = '#D14C32';
        });
        button.addEventListener('blur', () => {
            button.style.background = 'none';
        });
    });
}

window.addEventListener('DOMContentLoaded', ButtonStyle);
