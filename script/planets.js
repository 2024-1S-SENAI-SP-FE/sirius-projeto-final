
const Earth = (event) => {
    event.preventDefault()

    window.alert('funcionou')

    const textPlanets = document.getElementById('text-planets')
    textPlanets.innerText = `Third planet from the Sun and the only known planet to harbor life. 
    About 29.2% of Earth's surface is land with remaining 70.8% is 
    covered with water. Earth's distance from the Sun, physical properties 
    and geological history have allowed life to evolve and thrive.`

    document.getElementById('source-planets').setAttribute('href', 'https://en.wikipedia.org/wiki/Earth')

    document.getElementById('img-planets').src = "assets/planet-earth.svg"
}

