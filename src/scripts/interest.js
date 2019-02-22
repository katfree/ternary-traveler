const InterestsHTML = (interest) => {
    return `
    <section id = "${interest.id}" class ="interest">
    <h1> Destination: ${interest.place.name} </h1>
    <h3> Name: ${interest.name}</h3>
    <h3> Description: ${interest.description} </h3>

<button id = "deletebutton-${interest.id}">Delete Interest</button>
</section>
`

}

export default InterestsHTML