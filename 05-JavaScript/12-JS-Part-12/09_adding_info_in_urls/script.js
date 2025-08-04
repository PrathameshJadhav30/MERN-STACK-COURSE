const baseURL = "https://api.genderize.io";
const name = "emma";
const fullURL = `${baseURL}?name=${name}`;

fetch(fullURL)
    .then(res => res.json())
    .then(data => console.log(data));
