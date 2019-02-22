const InterestsHTML = (interest) => {
    return `
    <section id = "${interest.id}">
    <p> Destination: ${interest.place.name}
    <p> Name: ${interest.name}</p>
    <p> Description: ${interest.description} </p>

<button id = "deletebutton-${interest.id}">Delete Interest</button>
`

}

export default InterestsHTML