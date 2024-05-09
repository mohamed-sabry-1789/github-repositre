let test = {
    "NAME": "name",
    "ID": "id"
}

fetch(`https://api.github.com/users/AmrHalim/repos`).then((repos) => {
    return repos.json()
}).then((data) => {



    Object.entries(test).forEach(([key, value]) => {
        // console.log(key, value)
        data.forEach((p) => {

            console.log(key, p[value])
        })
    })


})
