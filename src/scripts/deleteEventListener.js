import APIManager from "./APImanager";
import DisplayInterests from "./addtoDOM";

const deleteButtonEventListener = () => {
    document.querySelector("#displayInterests").addEventListener("click", () => {
        if (event.target.id.startsWith("deletebutton-")) {
            const interestId = event.target.id.split("-")[1]

            const alertMessage = confirm("Are you sure you want to delete this Interest?");

            if (alertMessage == true) {
                APIManager.deleteInterest(interestId)
                .then(() => DisplayInterests())

                alert("Your Interest has been deleted!");


            }

            else {

                alert("Your Interest will not be deleted.")

            }

        }
    })
}

export default deleteButtonEventListener