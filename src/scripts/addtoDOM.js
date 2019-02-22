import APIManager from "./APImanager";
import InterestsHTML from "./interest";


const DisplayInterests = () => {
    document.querySelector("#displayInterests").innerHTML = ""
APIManager.getInterests()
.then( (interests) => {
    interests.forEach((interest) => {

        const currentinterests = InterestsHTML(interest)
                document.getElementById("displayInterests").innerHTML += currentinterests

    })

})
}

export default DisplayInterests