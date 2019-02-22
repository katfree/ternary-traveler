import APIManager from "./APImanager";
import DisplayInterests from "./addtoDOM";




const NewInterestEventListener = () => {
    document.querySelector("#addNewInterestButton").addEventListener("click", event => {
        const name = document.querySelector("#nameinput").value
        const description = document.querySelector("#descriptioninput").value
        const place  = document.querySelector("#places").value



        const NewInterestObject = {
            name: name,
            description: description,
            placeId: parseInt(place)

        }

       APIManager.postNewInterest(NewInterestObject)
       .then(() => APIManager.getInterests())
       .then(() => DisplayInterests())

       console.log("click")

    })
}

export default NewInterestEventListener