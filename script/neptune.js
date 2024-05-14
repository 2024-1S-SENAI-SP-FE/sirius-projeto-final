const NeptuneOverview = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Jupiter')

    document.getElementById('img-planetas').src = "assets/planet-neptune.svg"

    document.getElementById('img-geology').src = "none"

}

const NeptuneInternalStructure = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Neptune')

    document.getElementById('img-planetas').src = "assets/planet-neptune-internal.svg"

    document.getElementById('img-geology').src = "none"
}

const NeptuneSurfaceGeology = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Neptune')

    document.getElementById('img-planetas').src = "assets/planet-neptune.svg"

    document.getElementById('img-geology').src = "assets/geology-neptune.png"
}
