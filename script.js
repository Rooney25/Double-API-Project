const url = 'https://randomuser.me/api';
const url2 = 'https://api.thecatapi.com/v1/images/search';
let data;
let data2;
 
function onClick() {
    fetch(url)
        .then(function(response) {
            console.log("This is the response: ", response)
            return response.json();
        })
 
        .then(function(myJson) {
            data = myJson;
            console.log("This is the JSON: ", myJson);
            const ranName = data.results[0].name.first;
            const paragraph = document.createElement("p");
            paragraph.innerText = ranName;
            inpButton.innerHTML = "";
            inpButton.appendChild(paragraph);
        })
 
    fetch(url2)
        .then(function(response) {
            console.log("This is the response", response)
            return response.json();
        })
 
        .then(function(othJson) {
            data2 = othJson;
            console.log("This is the JSON: ", othJson);
            const ranPic = data2[0].url;
            const image = document.createElement("img");
            image.src = ranPic;
            inpButton.appendChild(image);
        })
}
