//Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=36289108e9d9490fb877aec28e0c511e";

async function gamesInfo() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        let html = "";

        for (let i = 0; i < data.results.length; i++) {
            if (i === 8) {
                break;
            }

            const info = data.results[i];
            const name = info.name;
            const rating = info.rating;
            const tags = info.tags.length;

            html += `<div class="game-container">
                        <h5>${name}</h5>
                        <p>Rating: ${rating}</p>
                        <p>Number of tags: ${tags}</p>
                    </div>`;
        }
        const container = document.querySelector(".main-container");
        container.innerHTML = html;
    } catch (error) {
        console.log(error);
    }
}

gamesInfo();
