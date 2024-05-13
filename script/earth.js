const EarthOverview = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Earth')

    document.getElementById('img-planetas').src = "assets/planet-earth.svg"

    document.getElementById('img-geology').src = "none"

}

const EarthInternalStructure = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Earth')

    document.getElementById('img-planetas').src = "assets/planet-earth-internal.svg"

    document.getElementById('img-geology').src = "none"
}

const EarthSurfaceGeology = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Earth')

    document.getElementById('img-planetas').src = "assets/planet-earth.svg"

    document.getElementById('img-geology').src = "assets/geology-earth.png"
}
