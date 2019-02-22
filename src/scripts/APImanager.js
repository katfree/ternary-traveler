const APIManager = {
    postNewInterest: function (userObject) {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        })
            .then(res => res.json())

    },
    getInterests: function () {
        return fetch(`http://localhost:8088/interests?_expand=place&expand=name`)
            .then(res => res.json())

    },

    deleteInterest: (interestsId) => {
        return fetch(`http://localhost:8088/interests/${interestsId}`, {
            method: "DELETE"
        })

    }

}

export default APIManager