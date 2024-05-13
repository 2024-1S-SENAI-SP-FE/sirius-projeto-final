const MercuryOverview = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Mercury')

    document.getElementById('img-planetas').src = "assets/planet-mercury.svg"

    document.getElementById('img-geology').src = "none"

}

const MercuryInternalStructure = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Mercury')

    document.getElementById('img-planetas').src = "assets/planet-mercury-internal.svg"

    document.getElementById('img-geology').src = "none"
}

const MercurySurfaceGeology = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.`

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Mercury')

    document.getElementById('img-planetas').src = "assets/planet-mercury.svg"

    document.getElementById('img-geology').src = "assets/geology-mercury.png"
}
