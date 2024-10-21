window.onload = () => {
    document.querySelector("button").onclick = getApi
}

function getApi() {
    const inputData = document.querySelector("input").value
    const fullUri = `https://www.swapi.tech/api/people/?name=${inputData}`
    fetch(fullUri)
        .then(res => res.json())
        .then(data => {

            console.log(data)
            //let height = data.result[0].properties.height
            let properties = data.result[0].properties  //shortcut
            let height = properties.height
            let mass = properties.mass
            let gender = properties.gender
            let hair_color = properties.hair_color
            let s = `height: ${height}\n mass: ${mass}\n gender: ${gender}\n hair_color: ${hair_color}`;
            // document.querySelector("#output").innerHTML = s
            output.innerHTML = s // output is a shortcut to tag with id="output"
        })
        .catch(err => console.log(err))
}


