const UranusOverview = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`   	

    document.getElementById('source-planetas').setAttribute('href', 'https://en.wikipedia.org/wiki/Jupiter')

    document.getElementById('img-planetas').src = "assets/planet-uranus.svg"

    document.getElementById('img-geology').src = "none"

}

const UranusInternalStructure = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`

    

    document.getElementById('img-planetas').src = "assets/planet-uranus-internal.svg"

    document.getElementById('img-geology').src = "none"
}

const UranusSurfaceGeology = (event) => {
    event.preventDefault()

    const textPlanets = document.getElementById('texto-planetas')
    textPlanets.innerText = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System..`

    

    document.getElementById('img-planetas').src = "assets/planet-uranus.svg"

    document.getElementById('img-geology').src = "assets/geology-uranus.png"
}
