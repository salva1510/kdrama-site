const API_KEY = "YOUR_OMDB_API_KEY";

const dramaTitles = [
  "Crash Landing on You",
  "Goblin",
  "Itaewon Class"
];

const container = document.getElementById("dramas");

async function loadDramas() {
  for (const title of dramaTitles) {
    const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`);
    const data = await res.json();

    if (data.Response === "True") {
      const div = document.createElement("div");
      div.className = "drama";
      div.innerHTML = `
        <img src="${data.Poster}" width="150"><br>
        <h3>${data.Title}</h3>
        <p>⭐ IMDb: ${data.imdbRating}</p>
        <p>${data.Year}</p>
      `;
      container.appendChild(div);
    }
  }
}

if (container) loadDramas();
