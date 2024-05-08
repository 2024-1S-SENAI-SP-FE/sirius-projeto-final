function Venus(event) {
    event.preventDefault()

    window.alert()

    const textPlanets = document.getElementById("text-planets")
    textPlanets.innerText = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`

    document.getElementById("source-planets").setAttribute("href", "https://en.wikipedia.org/wiki/Earth#Internal_structure")
    
}