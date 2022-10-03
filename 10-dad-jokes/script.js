const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");



jokeBtn.addEventListener('click', () => {
    generateJoke();
})

generateJoke();

/** Using Async/await */

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }

    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;

}


/** USING .Then()
function generateJoke(){

    const config = {
        headers : {
            Accept : "application/json"
        }
    }

    fetch("https://icanhazdadjoke.com/", config)
        .then((res) => res.json())
        .then((data) =>
            jokeEl.innerHTML = data.joke
        )

}
 */