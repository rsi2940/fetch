// const myHeaders = new Headers();
// const myInit = {
//   method: "GET",
//   headers: myHeaders,
//   mode: "no-cors",
//   cache: "default"
// }; //from MDN fetch api using fetch

fetch("https://swapi.co/api/planets/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));

// standard fetch example
