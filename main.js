//main variables
let theInput = document.querySelector(".get-repos input")
let getButton = document.querySelector(".get-button")
let reposData = document.querySelector(".show-data  span")


getButton.addEventListener("click", getRepos)
let prperyData = {
    "id": "id",
    "name": "name",
    "star": "stargazers_count",
    "private": "private"

}
function getRepos() {

    if (theInput.value === "") {
        reposData.innerHTML = "Please Write Your Username."
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`).then((repos) => {
            return repos.json()
        }).then((data) => {
            const fragmentThead = document.createDocumentFragment()
            const fragmentTr = document.createDocumentFragment()
            const fragmentTable = document.createDocumentFragment()
            reposData.innerHTML = ""
            let table = document.createElement("table")
            let thead = document.createElement("thead")
            let thdLink = document.createElement("th")
            thdLink.append("link")
            Object.keys(prperyData).forEach((key) => {
                let th = document.createElement("th")
                th.append(key)
                fragmentThead.append(th, thdLink)

            })
            thead.append(fragmentThead)
            data.forEach((repo) => {

                let tr = document.createElement("tr")
                Object.values(prperyData).forEach((value) => {
                    let td = document.createElement("td")
                    let textData = document.createTextNode(repo[value])
                    td.append(textData)
                    fragmentTr.append(td)

                })

                tr.append(fragmentTr)
                let TdLink = document.createElement("td")
                let link = document.createElement("a")
                link.href = `http://github.com/${theInput.value}/${repo.name}`
                // const linkText = document.createTextNode("vist") 
                // link.append(linkText)
                link.textContent = "vist"
                link.target = "_blank"
                //OR // link.setAttribute("target", "_blank")
                TdLink.append(link)
                tr.append(TdLink)
                table.append(thead, tr)
                fragmentTable.append(table)

            });
            reposData.append(fragmentTable)
            // for (let j = 0; j < property.length; j++) {
            //     let th = document.createElement("th")
            //     th.append(property[j])
            //     thead.append(th)

            // }
            // for (let i = 0; i < data.length; i++) {
            //     let tr = document.createElement("tr")
            //     for (let k = 0; k < property.length; k++) {
            //         let td = document.createElement("td")
            //         let textData = document.createTextNode(data[i][property[k]])
            //         td.append(textData)
            //         tr.append(td)

            //     }

            //     // let textId = document.createTextNode(data[i].id)
            //     // id.append(textId)

            //     // let name = document.createElement("td")
            //     // let textNAme = document.createTextNode(data[i].name)
            //     // name.append(textNAme)

            //     // let fullName = document.createElement("td")
            //     // let textFullName = document.createTextNode(data[i].full_name)
            //     // fullName.append(textFullName)

            //     // let private = document.createElement("td")
            //     // let textprivate = document.createTextNode(data[i].private)
            //     // private.append(textprivate)

            //     // tr.append(id, name, fullName, private)

            //     // table.append(tr)
            //     table.append(thead, tr)
            // }

            // reposData.append(table)
        })


    }

}