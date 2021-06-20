const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("newJoke");

//using Async/await
const generateJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);

  const data = await res.json();

  jokeElement.innerText = data.joke;
};

jokeBtn.addEventListener("click", () => generateJoke());

//using .then
// const generateJoke = () => {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => (jokeElement.innerText = data.joke))
//     .catch((err) => console.log("Error: ", err.message));
// };
